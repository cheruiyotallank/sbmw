import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './hero/hero';
import { ForexTicker } from './forex-ticker/forex-ticker';
import { Solutions } from './solutions/solutions';
import { EliteBanking } from './elite-banking/elite-banking';
import { ToolsAndApps } from './tools-and-apps/tools-and-apps';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Hero,
    ForexTicker,
    Solutions,
    EliteBanking,
    ToolsAndApps
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
}
