import { Component, OnInit, OnDestroy, NgZone, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  private scrollTimeout: any;
  private scrollHandler = () => {
    this.renderer.addClass(this.document.body, 'is-scrolling');
    
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    this.scrollTimeout = setTimeout(() => {
      this.renderer.removeClass(this.document.body, 'is-scrolling');
    }, 800);
  };

  constructor(
    private ngZone: NgZone,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    this.seoService.init();
    this.ngZone.runOutsideAngular(() => {
      // Use capture: true to catch scroll events from inner elements (like the sliders)
      window.addEventListener('scroll', this.scrollHandler, true);
    });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollHandler, true);
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }
}
