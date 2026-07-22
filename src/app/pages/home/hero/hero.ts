import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
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
      image: 'assets/sbmPhotos/photo5.png'
    },
    {
      title: 'Tuma For Free Na Pesalink', 
      ctaLabel: 'Discover more',
      ctaLink: '/for-business',
      image: 'assets/sbmPhotos/photo6.png'
    },
    {
      title: 'Fly Across Kenya With Jambojet', 
      ctaLabel: 'CLICK TO LEARN MORE',
      ctaLink: '/support',
      image: 'assets/sbmPhotos/photo5.png'
    },
    {
      title: 'Busara -> Kids Banking App', 
      ctaLabel: 'Learn more',
      ctaLink: '/for-you',
      image: 'assets/sbmPhotos/photo6.png'
    }
  ];

  activeSlide = 0;
  previousSlideIndex = -1;
  private rotationHandle?: ReturnType<typeof window.setInterval>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startRotation();
  }

  ngOnDestroy(): void {
    if (this.rotationHandle) {
      window.clearInterval(this.rotationHandle);
    }
  }

  startRotation(): void {
    this.rotationHandle = window.setInterval(() => {
      this.nextSlide();
      this.cdr.detectChanges();
    }, 4000);
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
}
