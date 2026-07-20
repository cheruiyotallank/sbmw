import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router, ActivatedRoute } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  activeMegaMenuIndex = -1;
  activeMegaMenuLinkIndex = -1;
  searchQuery = '';
  filteredResults: any[] = [];
  showSearchResults = false;
  activeSearchIndex = -1;

  // Search data - pages and services
  searchableItems = [
    { title: 'Personal Banking', route: '/for-you', icon: 'fa-user' },
    { title: 'Business Banking', route: '/for-business', icon: 'fa-briefcase' },
    { title: 'Corporate Banking', route: '/for-corporate', icon: 'fa-building' },
    { title: 'Diaspora Banking', route: '/diaspora', icon: 'fa-plane' },
    { title: 'Internet Banking', route: '/internet-banking', icon: 'fa-lock' },
    { title: 'About Us', route: '/about-us', icon: 'fa-info-circle' },
    { title: 'Contact Us', route: '/contact-us', icon: 'fa-phone' },
    { title: 'FAQs', route: '/faqs', icon: 'fa-question-circle' },
    { title: 'Careers', route: '/careers', icon: 'fa-briefcase' },
    { title: 'Investor Relations', route: '/investor-relations', icon: 'fa-line-chart' },
    { title: 'Support', route: '/support', icon: 'fa-headphones' },
    { title: 'Newsroom', route: '/newsroom', icon: 'fa-newspaper' },
    { title: 'Treasury', route: '/treasury', icon: 'fa-exchange' },
    { title: 'Bancassurance', route: '/bancassurance', icon: 'fa-shield' },
    { title: 'Sustainability', route: '/sustainability', icon: 'fa-leaf' },
    { title: 'Ways of Banking', route: '/support', icon: 'fa-university' }
  ];

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef,
    private activatedRoute: ActivatedRoute
  ) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  }

  onSearchInput(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.searchQuery = query;
    
    if (query.length > 0) {
      this.filteredResults = this.searchableItems.filter(item =>
        item.title.toLowerCase().includes(query)
      );
      this.showSearchResults = true;
      this.activeSearchIndex = -1;
    } else {
      this.filteredResults = [];
      this.showSearchResults = false;
    }
  }

  selectSearchResult(item: any) {
    this.router.navigate([item.route]);
    this.searchQuery = '';
    this.filteredResults = [];
    this.showSearchResults = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const searchContainer = this.el.nativeElement.querySelector('.search-box-container');
    if (searchContainer && !searchContainer.contains(event.target)) {
      this.searchQuery = '';
      this.filteredResults = [];
      this.showSearchResults = false;
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (!this.showSearchResults) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.activeSearchIndex = Math.min(this.activeSearchIndex + 1, this.filteredResults.length - 1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.activeSearchIndex = Math.max(this.activeSearchIndex - 1, -1);
    } else if (event.key === 'Enter' && this.activeSearchIndex >= 0) {
      event.preventDefault();
      this.selectSearchResult(this.filteredResults[this.activeSearchIndex]);
    } else if (event.key === 'Escape') {
      this.searchQuery = '';
      this.filteredResults = [];
      this.showSearchResults = false;
    }
  }

  // Mega menu keyboard navigation
  onMegaMenuKeyDown(event: KeyboardEvent, menuIndex: number) {
    const menuItems = document.querySelectorAll('.nav-item-dropdown');
    
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.activeMegaMenuIndex = Math.min(this.activeMegaMenuIndex + 1, menuItems.length - 1);
      this.focusMegaMenuItem(this.activeMegaMenuIndex);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.activeMegaMenuIndex = Math.max(this.activeMegaMenuIndex - 1, 0);
      this.focusMegaMenuItem(this.activeMegaMenuIndex);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      // Focus first link in mega menu
      const megaMenuLinks = document.querySelectorAll('.mega-menu-link');
      if (megaMenuLinks.length > 0) {
        (megaMenuLinks[0] as HTMLElement).focus();
      }
    } else if (event.key === 'Escape') {
      event.preventDefault();
      this.activeMegaMenuIndex = -1;
    }
  }

  focusMegaMenuItem(index: number) {
    const menuItems = document.querySelectorAll('.nav-item-dropdown > a');
    if (menuItems[index]) {
      (menuItems[index] as HTMLElement).focus();
    }
  }

  activeSolutionTab: 'for-you' | 'for-business' | 'for-corporate' | 'diaspora' = 'for-you';

  setSolutionTab(tab: 'for-you' | 'for-business' | 'for-corporate' | 'diaspora') {
    this.activeSolutionTab = tab;
  }

  @HostListener('window:resize')
  onResize() {
    // If we resize to desktop width, automatically close the mobile menu
    if (window.innerWidth >= 992 && this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      document.body.classList.remove('mobile-menu-open');
    }
  }
}
