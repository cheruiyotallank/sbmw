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
      title: 'Welcome to SBM', // Three words
      ctaLabel: 'CLICK TO LEARN MORE',
      ctaLink: '/for-you',
      image: 'assets/sbmPhotos/photo1.png'
    },
    {
      title: '', // No specific text requested
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
      title: '', // No specific text requested
      ctaLabel: 'Learn more',
      ctaLink: '/for-you',
      image: 'assets/sbmPhotos/photo4.png'
    }
  ];

  activeSlide = 0;
  previousSlideIndex = -1;
  private rotationHandle?: ReturnType<typeof window.setInterval>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.rotationHandle = window.setInterval(() => {
      this.nextSlide();
      this.cdr.detectChanges();
    }, 8000);
  }

  ngOnDestroy(): void {
    if (this.rotationHandle) {
      window.clearInterval(this.rotationHandle);
    }
  }

  nextSlide(): void {
    this.previousSlideIndex = this.activeSlide;
    this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    this.cdr.detectChanges();
  }

  previousSlide(): void {
    this.previousSlideIndex = this.activeSlide;
    this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
  }

  selectSlide(index: number): void {
    if (this.activeSlide !== index) {
      this.previousSlideIndex = this.activeSlide;
      this.activeSlide = index;
    }
  }
}
