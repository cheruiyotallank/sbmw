import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <svg [attr.width]="width" [attr.height]="height" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Left Bar -->
      <polygon points="20,35 35,25 35,75 20,65" fill="#0b3471"/>
      <!-- Middle Bar -->
      <polygon points="40,20 55,10 55,90 40,80" fill="#0b3471"/>
      <!-- Right Bar -->
      <polygon points="60,25 75,35 75,65 60,75" fill="#1aa3d8"/>
    </svg>
  `
})
export class LogoComponent {
  @Input() width: number | string = 32;
  @Input() height: number | string = 32;
}
