import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent implements OnInit, OnDestroy {
  isVisible = false;
  scrollThreshold = 300; // Show button after scrolling 300px

  ngOnInit(): void {
    this.checkScroll();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isVisible = scrollTop > this.scrollThreshold;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
