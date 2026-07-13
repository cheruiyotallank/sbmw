import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tools-and-apps',
  imports: [CommonModule, ScrollRevealDirective, RouterLink],
  templateUrl: './tools-and-apps.html',
  styleUrl: './tools-and-apps.scss',
  standalone: true
})
export class ToolsAndApps {

}
