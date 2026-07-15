import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

interface BreadcrumbItem {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: BreadcrumbItem[] = [];
  showBreadcrumb = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
      this.showBreadcrumb = this.breadcrumbs.length > 1; // Only show if there's more than just Home
    });
  }

  private buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: BreadcrumbItem[] = []): BreadcrumbItem[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data['breadcrumb'] || this.formatLabel(routeURL);
      
      if (label) {
        breadcrumbs.push({
          label: label,
          url: url
        });
      }

      return this.buildBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  private formatLabel(url: string): string {
    if (!url) return 'Home';
    
    return url
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
