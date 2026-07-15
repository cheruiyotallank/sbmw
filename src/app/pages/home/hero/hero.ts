import { Component, OnDestroy, OnInit, ChangeDetectorRef, HostListener, ElementRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  standalone: true
})
export class Hero implements OnInit, OnDestroy {
  readonly slides = [
    {
      title: 'Welcome to SBM', 
      ctaLabel: 'CLICK TO LEARN MORE',
      ctaLink: '/for-you',
      image: 'assets/sbmPhotos/photo1.png'
    },
    {
      title: 'Tuma For Free Na Pesalink', 
      ctaLabel: 'Discover more',
      ctaLink: '/for-business',
      image: 'assets/sbmPhotos/Photo2.jpg'
    },
    {
      title: 'Fly Across Kenya With Jambojet', 
      ctaLabel: 'CLICK TO LEARN MORE',
      ctaLink: '/support',
      image: 'assets/sbmPhotos/photo3.jpg'
    },
    {
      title: 'Busara -> Kids Banking App', 
      ctaLabel: 'Learn more',
      ctaLink: '/for-you',
      image: 'assets/sbmPhotos/photo4.png'
    }
  ];

  activeSlide = 0;
  previousSlideIndex = -1;
  private rotationHandle?: ReturnType<typeof window.setInterval>;
  isPaused = false;
  isUserInteracting = false;

  // Touch gesture properties
  private touchStartX = 0;
  private touchEndX = 0;
  private touchStartY = 0;
  private touchEndY = 0;

  constructor(
    private cdr: ChangeDetectorRef,
    private el: ElementRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.startRotation();
  }

  ngOnDestroy(): void {
    if (this.rotationHandle) {
      window.clearInterval(this.rotationHandle);
    }
  }

  startRotation(): void {
    this.ngZone.runOutsideAngular(() => {
      this.rotationHandle = window.setInterval(() => {
        if (!this.isPaused && !this.isUserInteracting) {
          this.ngZone.run(() => {
            this.nextSlide();
            this.cdr.detectChanges();
          });
        }
      }, 8000);
    });
  }

  nextSlide(): void {
    this.previousSlideIndex = this.activeSlide;
    this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    this.cdr.detectChanges();
  }

  previousSlide(): void {
    this.previousSlideIndex = this.activeSlide;
    this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
    this.cdr.detectChanges();
  }

  selectSlide(index: number): void {
    if (this.activeSlide !== index) {
      this.previousSlideIndex = this.activeSlide;
      this.activeSlide = index;
      this.cdr.detectChanges();
    }
  }

  // User interaction handlers
  onUserInteractStart(): void {
    this.isUserInteracting = true;
    this.isPaused = true;
  }

  onUserInteractEnd(): void {
    this.isUserInteracting = false;
    setTimeout(() => {
      this.isPaused = false;
    }, 2000); // Resume after 2 seconds of no interaction
  }

  // Touch gesture handlers
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
    this.touchStartY = event.changedTouches[0].screenY;
    this.onUserInteractStart();
  }

  onTouchMove(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.touchEndY = event.changedTouches[0].screenY;
  }

  onTouchEnd(event: TouchEvent): void {
    this.handleSwipe();
    this.onUserInteractEnd();
  }

  handleSwipe(): void {
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;
    const minSwipeDistance = 50;

    // Only handle horizontal swipes
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          this.previousSlide();
        } else {
          this.nextSlide();
        }
      }
    }
  }

  // Keyboard navigation
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.previousSlide();
      this.onUserInteractStart();
      this.onUserInteractEnd();
    } else if (event.key === 'ArrowRight') {
      this.nextSlide();
      this.onUserInteractStart();
      this.onUserInteractEnd();
    } else if (event.key === ' ') {
      event.preventDefault();
      this.isPaused = !this.isPaused;
    }
  }
}
