import { Routes } from '@angular/router';
import { SectionPageComponent } from './pages/section-page/section-page.component';

export const routes: Routes = [
  {
    path: '',
    data: { title: 'Bank from Home with SBM Mfukoni Banking', description: 'With SBM Bank, you can open a bank account from home and enjoy the convenience of secure digital banking apps in Kenya, tailored to support your financial goals.' },
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'about-us',
    data: { title: 'About Us', description: 'SBM Bank, regulated by the Central Bank of Kenya, stands as one of Kenya\'s top banks with innovative financial solutions.' },
    loadComponent: () => import('./pages/about/about').then((m) => m.About)
  },
  {
    path: 'investor-relations',
    data: { title: 'Investor Relations', description: 'Discover SBM Bank Kenya\'s investor relations hub for financial updates, performance metrics, and corporate governance.' },
    loadComponent: () => import('./pages/investors/investors').then((m) => m.Investors)
  },
  {
    path: 'sustainability',
    data: { title: 'Sustainability', description: 'Discover how SBM Bank promotes sustainability through sustainable finance and community initiatives.' },
    loadComponent: () => import('./pages/sustainability/sustainability').then((m) => m.Sustainability)
  },
  {
    path: 'careers',
    data: { title: 'Careers', description: 'SBM Bank Kenya: Look for opportunities with us and move your career forward.' },
    loadComponent: () => import('./pages/carreers/carreers').then((m) => m.Carreers)
  },
  {
    path: 'support',
    data: { title: 'Support', description: 'Experience hassle-free banking with our expert support. Call our Contact Centre today.' },
    loadComponent: () => import('./pages/support/support').then((m) => m.Support)
  },
  {
    path: 'newsroom',
    data: { title: 'Newsroom', description: 'Stay informed with SBM Bank Kenya\'s financial insights, and industry news.' },
    loadComponent: () => import('./pages/newsroom/newsroom').then((m) => m.Newsroom)
  },
  {
    path: 'internet-banking',
    data: { title: 'Internet Banking', description: 'SBM Kenya Internet Banking offers secure, convenient online banking services, allowing you to manage your accounts 24/7.' },
    loadComponent: () => import('./pages/internet-banking/internet-banking').then((m) => m.InternetBanking)
  },
  {
    path: 'for-you',
    data: { title: 'For You', description: 'At SBM we have all the solutions to meet your personal banking needs.' },
    loadComponent: () => import('./pages/for-you/for-you').then((m) => m.ForYou)
  },
  {
    path: 'for-business',
    loadComponent: () => import('./pages/for-your-business/for-your-business').then((m) => m.ForYourBusiness)
  },
  {
    path: 'for-corporate',
    loadComponent: () => import('./pages/for-corporate/for-corporate').then((m) => m.ForCorporate)
  },
  {
    path: 'diaspora',
    loadComponent: () => import('./pages/diaspora/diaspora').then((m) => m.Diaspora)
  },
  {
    path: 'ways-of-banking',
    loadComponent: () => import('./pages/ways-of-banking/ways-of-banking').then((m) => m.WaysOfBanking)
  },
  {
    path: 'treasury',
    loadComponent: () => import('./pages/treasury/treasury').then((m) => m.Treasury)
  },
  {
    path: 'bancassurance',
    loadComponent: () => import('./pages/bancassurance/bancassurance').then((m) => m.Bancassurance)
  },
  {
    path: 'faqs',
    component: SectionPageComponent,
    data: {
      title: 'FAQs',
      subtitle: 'Frequently asked questions with quick answers and support shortcuts.',
      accent: 'Answers',
      summary: 'FAQ content helps reduce support load and makes the site feel easier to use.',
      highlights: ['General questions', 'Accounts', 'Digital banking', 'Support help']
    }
  },
  {
    path: 'contact-us',
    component: SectionPageComponent,
    data: {
      title: 'Contact Us',
      subtitle: 'Call center, email, social channels, and support touchpoints.',
      accent: 'Reach us',
      summary: 'Contact pages should be direct and simple, with the most common channels surfaced first.',
      highlights: ['Phone', 'Email', 'Social media', 'Branch help']
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
