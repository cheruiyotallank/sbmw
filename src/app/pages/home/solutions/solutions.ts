import { Component, OnDestroy, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-solutions',
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './solutions.html',
  styleUrl: './solutions.scss',
  standalone: true
})
export class Solutions implements OnDestroy, AfterViewInit {
  activeSolutionTab = 'for-you';
  private sectionObserver?: IntersectionObserver;

  @ViewChild('sliderContainer') sliderContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('businessSliderContainer') businessSliderContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('corporateSliderContainer') corporateSliderContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('diasporaSliderContainer') diasporaSliderContainer!: ElementRef<HTMLDivElement>;
  private slideInterval: any;

  // Data for the 'Solutions for You' cards
  forYouCards = [
    { title: 'Buy a house', desc: 'Own your dream home through our mortgages and credit facilities', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/buyAhouse.png' },
    { title: 'Manage my salary', desc: 'Explore our great offerings for salaried individuals', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/manageMySalary.png' },
    { title: 'A card for my transactions', desc: 'Tap and go. For easy, cashless payments and transactions', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/transactionCard.png' },
    { title: 'Purchase a car', desc: 'Flexible and friendly loans to help you own your first car', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/purchaseAcar.png' },
    { title: 'Save', desc: 'Take advantage of our competitive rates and grow your money', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/save.png' },
    { title: 'Plan a vacation', desc: 'Save up or access quick loans and pay for your relaxing getaway', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/planAvacation.png' }
  ];

  // Data for the 'Solutions for your Business' cards
  forBusinessCards = [
    { title: 'Use only what you need, when you need it', desc: 'Friendly terms that let you pay for only what you use', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/needs.png' },
    { title: 'Mobile money payments to your account instantly', desc: 'Collect cashless payments easily, straight to your SBM Bank account using one of the most reliable banking apps in Kenya.', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/paymentsInstant.png' },
    { title: 'Are you looking to get upto KES 5M loan', desc: 'Enjoy great loan limits of up to KES 5 Million for the growth of your enterprise', btnText: 'APPLY NOW',image: 'assets/sbmPhotos/loans.png' },
    { title: 'A loan for my business', desc: 'Get the financial muscle you need to scale up your business', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/businessLoan.png' }
  ];

  // Data for the 'Solutions for Corporate' cards
  forCorporateCards = [
    { title: 'I need an account to run my company', desc: '', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/accounts.png' },
    { title: 'Raise funds for a project', desc: '', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/raise.png' },
    { title: 'Acquire assets for my company', desc: '', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/acquire.png' },
    { title: 'Insure my company\'s assets', desc: '', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/insure.png' },
    { title: 'Invest in my business', desc: '', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/invest.png' },
    { title: 'Get funds to run my company', desc: '', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/funds.png' }
  ];

  // Data for the 'Solutions for Diaspora' cards
  forDiasporaCards = [
    { title: 'Open an account while abroad', desc: 'Open an account and manage your money while overseas', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/openabroad.png' },
    { title: 'Save money while abroad', desc: 'Put money away for future security when you settle back home', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/saveabroad.png' },
    { title: 'Invest back home while abroad', desc: 'Send money back home for investment through our transfer services', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/investabroad.png' },
    { title: 'Quick financial boost while abroad', desc: 'Great loans with quick turnaround time between application and facilitation', btnText: 'OPEN AN ACCOUNT', image: 'assets/sbmPhotos/boostabroad.png' }
  ];

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    // ScrollSpy observer to update active tab on scroll
    this.sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSolutionTab = entry.target.id;
        }
      });
    }, { threshold: 0.5 }); // Trigger when section is 50% visible

    const sections = ['for-you', 'for-business', 'for-corporate', 'diaspora'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.sectionObserver?.observe(el);
    });

    // Setup 20-second auto-slide interval (running outside Angular to prevent constant change detection)
    this.ngZone.runOutsideAngular(() => {
      this.slideInterval = setInterval(() => {
        this.slideNext();
        this.businessSlideNext();
        this.corporateSlideNext();
        this.diasporaSlideNext();
      }, 20000); // 20 seconds
    });
  }

  // Slide functionality for 'for you'
  slideNext(): void {
    if (this.sliderContainer) {
      const container = this.sliderContainer.nativeElement;
      const scrollAmount = 350; // Approximate width of one card + gap
      
      // If we are near the end, loop back to the start
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
      
      // If at the start, loop to the end
      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth;
      } else {
        container.scrollLeft -= scrollAmount;
      }
    }
  }

  // Slide functionality for 'for business'
  businessSlideNext(): void {
    if (this.businessSliderContainer) {
      const container = this.businessSliderContainer.nativeElement;
      const scrollAmount = 350;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  }

  businessSlidePrev(): void {
    if (this.businessSliderContainer) {
      const container = this.businessSliderContainer.nativeElement;
      const scrollAmount = 350;
      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth;
      } else {
        container.scrollLeft -= scrollAmount;
      }
    }
  }

  // Slide functionality for 'for corporate'
  corporateSlideNext(): void {
    if (this.corporateSliderContainer) {
      const container = this.corporateSliderContainer.nativeElement;
      const scrollAmount = 350;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  }

  corporateSlidePrev(): void {
    if (this.corporateSliderContainer) {
      const container = this.corporateSliderContainer.nativeElement;
      const scrollAmount = 350;
      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth;
      } else {
        container.scrollLeft -= scrollAmount;
      }
    }
  }

  // Slide functionality for 'for diaspora'
  diasporaSlideNext(): void {
    if (this.diasporaSliderContainer) {
      const container = this.diasporaSliderContainer.nativeElement;
      const scrollAmount = 350;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  }

  diasporaSlidePrev(): void {
    if (this.diasporaSliderContainer) {
      const container = this.diasporaSliderContainer.nativeElement;
      const scrollAmount = 350;
      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth;
      } else {
        container.scrollLeft -= scrollAmount;
      }
    }
  }

  // Reset interval when user manually clicks to avoid unexpected jumps
  resetInterval(): void {
    clearInterval(this.slideInterval);
    this.ngZone.runOutsideAngular(() => {
      this.slideInterval = setInterval(() => {
        this.slideNext();
        this.businessSlideNext();
        this.corporateSlideNext();
        this.diasporaSlideNext();
      }, 20000);
    });
  }

  onNextClick(): void {
    this.slideNext();
    this.resetInterval();
  }

  onPrevClick(): void {
    this.slidePrev();
    this.resetInterval();
  }

  onBusinessNextClick(): void {
    this.businessSlideNext();
    this.resetInterval();
  }

  onBusinessPrevClick(): void {
    this.businessSlidePrev();
    this.resetInterval();
  }

  onCorporateNextClick(): void {
    this.corporateSlideNext();
    this.resetInterval();
  }

  onCorporatePrevClick(): void {
    this.corporateSlidePrev();
    this.resetInterval();
  }

  onDiasporaNextClick(): void {
    this.diasporaSlideNext();
    this.resetInterval();
  }

  onDiasporaPrevClick(): void {
    this.diasporaSlidePrev();
    this.resetInterval();
  }

  scrollToSolution(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      this.activeSolutionTab = id; 
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnDestroy(): void {
    if (this.sectionObserver) {
      this.sectionObserver.disconnect();
    }
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
}
