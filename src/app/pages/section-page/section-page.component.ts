import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './section-page.component.html',
  styleUrl: './section-page.component.scss'
})
export class SectionPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly title = this.route.snapshot.data['title'] as string;
  readonly subtitle = this.route.snapshot.data['subtitle'] as string;
  readonly accent = this.route.snapshot.data['accent'] as string;
  readonly summary = this.route.snapshot.data['summary'] as string;
  readonly highlights = (this.route.snapshot.data['highlights'] as string[]) ?? [];
  readonly toneClass = this.buildToneClass(this.accent || this.title);
  readonly statCards = [
    { label: 'Route focus', value: this.accent },
    { label: 'Highlights', value: String(this.highlights.length || 0) },
    { label: 'User goal', value: this.buildUserGoal(this.title) }
  ];

  private buildToneClass(input: string): string {
    return input.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }

  private buildUserGoal(title: string): string {
    const cleanTitle = title.toLowerCase();

    if (cleanTitle.includes('internet banking')) {
      return 'Secure login';
    }

    if (cleanTitle.includes('support') || cleanTitle.includes('faqs') || cleanTitle.includes('contact')) {
      return 'Get help fast';
    }

    if (cleanTitle.includes('career')) {
      return 'Find opportunities';
    }

    if (cleanTitle.includes('investor')) {
      return 'Read reports';
    }

    return 'Explore options';
  }
}