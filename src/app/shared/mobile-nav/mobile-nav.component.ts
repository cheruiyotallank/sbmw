import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss'
})
export class MobileNavComponent {
  activeTab = 'home';

  navItems = [
    { id: 'home', icon: 'fa-home', label: 'Home', route: '/' },
    { id: 'accounts', icon: 'fa-university', label: 'Accounts', route: '/for-you' },
    { id: 'transfer', icon: 'fa-exchange', label: 'Transfer', route: '/internet-banking' },
    { id: 'support', icon: 'fa-headphones', label: 'Support', route: '/support' },
    { id: 'more', icon: 'fa-ellipsis-h', label: 'More', route: '/about-us' }
  ];

  constructor(private router: Router) {
    this.updateActiveTab();
  }

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
    const item = this.navItems.find(item => item.id === tabId);
    if (item) {
      this.router.navigate([item.route]);
    }
  }

  private updateActiveTab(): void {
    const currentUrl = this.router.url;
    const matchingItem = this.navItems.find(item => currentUrl === item.route || currentUrl.startsWith(item.route + '/'));
    if (matchingItem) {
      this.activeTab = matchingItem.id;
    }
  }
}
