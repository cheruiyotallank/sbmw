import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banking-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './banking-categories.component.html',
  styleUrl: './banking-categories.component.scss'
})
export class BankingCategoriesComponent {
  categories = [
    {
      title: 'Personal Banking',
      description: 'Accounts, loans, and savings tailored for you.',
      icon: 'fa-user',
      link: '/for-you'
    },
    {
      title: 'Business Banking',
      description: 'Empowering your SME with financial solutions.',
      icon: 'fa-briefcase',
      link: '/for-business'
    },
    {
      title: 'Corporate Banking',
      description: 'Advanced treasury and trade finance services.',
      icon: 'fa-building',
      link: '/for-corporate'
    },
    {
      title: 'Digital Banking',
      description: 'Seamless online and mobile app experiences.',
      icon: 'fa-mobile',
      link: '/internet-banking'
    },
    {
      title: 'Diaspora Banking',
      description: 'Invest and transact securely from abroad.',
      icon: 'fa-globe',
      link: '/diaspora'
    }
  ];
}
