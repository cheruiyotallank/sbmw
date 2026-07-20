import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './hero/hero';
import { BankingCategoriesComponent } from './banking-categories/banking-categories.component';
import { EliteBanking } from './elite-banking/elite-banking';
import { ToolsAndApps } from './tools-and-apps/tools-and-apps';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Hero,
    BankingCategoriesComponent,
    EliteBanking,
    ToolsAndApps
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
}
