import { Routes } from '@angular/router';
import { SectionPageComponent } from './pages/section-page/section-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'about-us',
    component: SectionPageComponent,
    data: {
      title: 'About Us',
      subtitle: 'Learn who SBM is, what we stand for, and how the brand supports customers.',
      accent: 'About',
      summary:
        'This page will present the bank story, purpose, leadership, and governance in a clean, modern layout.',
      highlights: ['Company overview', 'Leadership', 'Governance', 'Brand values']
    }
  },
  {
    path: 'investor-relations',
    component: SectionPageComponent,
    data: {
      title: 'Investor Relations',
      subtitle: 'Performance, reports, disclosures, and the information investors need.',
      accent: 'Investors',
      summary:
        'A structured investor area will make reports, results, and disclosures easier to find.',
      highlights: ['Reports', 'Announcements', 'Financial highlights', 'Disclosures']
    }
  },
  {
    path: 'sustainability',
    component: SectionPageComponent,
    data: {
      title: 'Sustainability',
      subtitle: 'Environmental and social impact stories that show how the bank gives back.',
      accent: 'Impact',
      summary:
        'This section will focus on responsible banking, community programs, and sustainability goals.',
      highlights: ['ESG', 'Community programs', 'Responsible banking', 'Progress updates']
    }
  },
  {
    path: 'careers',
    component: SectionPageComponent,
    data: {
      title: 'Careers',
      subtitle: 'Open roles, career paths, and employee life at SBM.',
      accent: 'Jobs',
      summary:
        'A careers page should feel human, practical, and easy to browse for future applicants.',
      highlights: ['Open roles', 'Departments', 'Culture', 'Benefits']
    }
  },
  {
    path: 'support',
    component: SectionPageComponent,
    data: {
      title: 'Support',
      subtitle: 'Contact channels, FAQs, service guidance, and quick help entry points.',
      accent: 'Help',
      summary:
        'Support content should reduce friction with clear help cards and obvious next actions.',
      highlights: ['FAQs', 'Call center', 'Branch help', 'Service requests']
    }
  },
  {
    path: 'newsroom',
    component: SectionPageComponent,
    data: {
      title: 'Newsroom',
      subtitle: 'Press releases, stories, announcements, and bank updates.',
      accent: 'News',
      summary:
        'This page will serve as the publication hub for announcements and media content.',
      highlights: ['Press releases', 'Articles', 'Announcements', 'Media']
    }
  },
  {
    path: 'internet-banking',
    component: SectionPageComponent,
    data: {
      title: 'Internet Banking',
      subtitle: 'Direct login entry point for customers who want account access.',
      accent: 'Login',
      summary:
        'We will design this as a focused, conversion-friendly page with a strong login call to action.',
      highlights: ['Secure login', 'Register', 'Forgot credentials', 'Help desk']
    }
  },
  {
    path: 'for-you',
    component: SectionPageComponent,
    data: {
      title: 'For You',
      subtitle: 'Personal accounts, cards, loans, savings, and day-to-day banking.',
      accent: 'Personal',
      summary:
        'This section will group retail products into clean cards so customers can compare options quickly.',
      highlights: ['Accounts', 'Savings', 'Loans', 'Cards']
    }
  },
  {
    path: 'for-business',
    component: SectionPageComponent,
    data: {
      title: 'For Business',
      subtitle: 'Payment tools, borrowing options, and services for growing businesses.',
      accent: 'Business',
      summary:
        'Business banking should highlight speed, collections, growth tools, and relationship support.',
      highlights: ['Collections', 'Cash management', 'Working capital', 'Trade services']
    }
  },
  {
    path: 'for-corporate',
    component: SectionPageComponent,
    data: {
      title: 'For Corporate',
      subtitle: 'Institutional banking, treasury, and enterprise financial solutions.',
      accent: 'Corporate',
      summary:
        'Corporate customers need a more data-heavy layout, but still simple navigation and clear actions.',
      highlights: ['Treasury', 'Institutional support', 'Trade finance', 'Liquidity']
    }
  },
  {
    path: 'diaspora',
    component: SectionPageComponent,
    data: {
      title: 'Diaspora',
      subtitle: 'Banking support for customers living abroad and sending value home.',
      accent: 'Global',
      summary:
        'Diaspora banking should emphasize ease, trust, and cross-border convenience.',
      highlights: ['Transfers', 'Savings', 'Investments', 'Loan access']
    }
  },
  {
    path: 'treasury',
    component: SectionPageComponent,
    data: {
      title: 'Treasury',
      subtitle: 'FX, money markets, and treasury products for businesses and institutions.',
      accent: 'Markets',
      summary:
        'A treasury page should feel precise and sophisticated, with rates, products, and insights.',
      highlights: ['FX', 'Money market', 'Advisory', 'Liquidity']
    }
  },
  {
    path: 'bancassurance',
    component: SectionPageComponent,
    data: {
      title: 'Bancassurance',
      subtitle: 'Insurance-related products made available through the bank.',
      accent: 'Insurance',
      summary:
        'This page will connect banking and insurance products in a clear, user-friendly way.',
      highlights: ['Life cover', 'Asset protection', 'Claims help', 'Product details']
    }
  },
  {
    path: 'faqs',
    component: SectionPageComponent,
    data: {
      title: 'FAQs',
      subtitle: 'Frequently asked questions with quick answers and support shortcuts.',
      accent: 'Answers',
      summary:
        'FAQ content helps reduce support load and makes the site feel easier to use.',
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
      summary:
        'Contact pages should be direct and simple, with the most common channels surfaced first.',
      highlights: ['Phone', 'Email', 'Social media', 'Branch help']
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
