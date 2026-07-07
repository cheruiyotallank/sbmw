import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly slides = [
    {
      eyebrow: 'Pebble Savings Account',
      title: 'Big dreams start with the first step.',
      description: 'Every child\'s dream deserves a strong foundation.',
      subDetail: 'First 50 Customers to deposit Kes. 100,000 get a free limited-edition Turtle Bank!',
      ctaLabel: 'CLICK TO LEARN MORE',
      ctaLink: '/for-you'
    },
    {
      eyebrow: 'Business Financing',
      title: 'Solutions for your Business Growth.',
      description: 'MSME collateral-free working capital loans of up to KES 5 Million.',
      subDetail: 'Flexible repayment terms designed to help you run and scale your company.',
      ctaLabel: 'CLICK TO LEARN MORE',
      ctaLink: '/for-business'
    },
    {
      eyebrow: 'SBM Mfukoni App',
      title: 'Bank from Home with SBM Mfukoni Banking.',
      description: 'Enjoy the convenience of secure, 24/7 digital banking.',
      subDetail: 'Perform transfers, buy airtime, pay bills, and manage cards instantly.',
      ctaLabel: 'CLICK TO LEARN MORE',
      ctaLink: '/support'
    }
  ];

  activeSlide = 0;
  private rotationHandle?: ReturnType<typeof window.setInterval>;

  ngOnInit(): void {
    this.rotationHandle = window.setInterval(() => this.nextSlide(), 6000);
  }

  ngOnDestroy(): void {
    if (this.rotationHandle) {
      window.clearInterval(this.rotationHandle);
    }
  }

  nextSlide(): void {
    this.activeSlide = (this.activeSlide + 1) % this.slides.length;
  }

  previousSlide(): void {
    this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
  }

  selectSlide(index: number): void {
    this.activeSlide = index;
  }
}
