import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { DragScrollDirective } from '../../../shared/directives/drag-scroll.directive';

@Component({
  selector: 'app-elite-banking',
  imports: [CommonModule, RouterLink, ScrollRevealDirective, DragScrollDirective],
  templateUrl: './elite-banking.html',
  styleUrl: './elite-banking.scss',
  standalone: true
})
export class EliteBanking {
  @ViewChild('sliderContainer') sliderContainer!: ElementRef<HTMLDivElement>;

  // Enhanced touch gesture properties
  private touchStartX = 0;
  private touchEndX = 0;
  private touchStartY = 0;
  private touchEndY = 0;
  private isDragging = false;

  eliteCards = [
    { icon: 'fa fa-diamond', title: 'Wealth Management', desc: 'Expert guidance for growing and protecting your wealth across generations.' },
    { icon: 'fa fa-black-tie', title: 'Dedicated Manager', desc: 'A personal relationship manager who understands your unique financial needs.' },
    { icon: 'fa fa-headphones', title: 'Priority Support', desc: '24/7 dedicated customer service line for immediate, specialized assistance.' },
    { icon: 'fa fa-star', title: 'Exclusive Privileges', desc: 'Premium lifestyle benefits, travel perks, and exclusive member rewards.' },
    { icon: 'fa fa-handshake-o', title: 'Bespoke Solutions', desc: 'Tailored banking and credit solutions designed precisely for you.' },
    { icon: 'fa fa-globe', title: 'Global Access', desc: 'Seamless banking and priority services across multiple countries worldwide.' }
  ];

  slideNext(): void {
    if (this.sliderContainer) {
      const container = this.sliderContainer.nativeElement;
      const scrollAmount = 350;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  }

  slidePrev(): void {
    if (this.sliderContainer) {
      const container = this.sliderContainer.nativeElement;
      const scrollAmount = 350;
      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth;
      } else {
        container.scrollLeft -= scrollAmount;
      }
    }
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
    this.touchStartY = event.changedTouches[0].screenY;
    this.isDragging = true;
  }

  onTouchMove(event: TouchEvent): void {
    if (!this.isDragging || !this.sliderContainer) return;
    
    this.touchEndX = event.changedTouches[0].screenX;
    this.touchEndY = event.changedTouches[0].screenY;
    
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      event.preventDefault();
      this.sliderContainer.nativeElement.scrollLeft -= deltaX * 0.5;
    }
  }

  onTouchEnd(event: TouchEvent): void {
    if (!this.isDragging) return;
    
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;
    const minSwipeDistance = 50;
    
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        this.slidePrev();
      } else {
        this.slideNext();
      }
    }
    
    this.isDragging = false;
  }
}
