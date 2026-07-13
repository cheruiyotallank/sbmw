import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-elite-banking',
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './elite-banking.html',
  styleUrl: './elite-banking.scss',
  standalone: true
})
export class EliteBanking {

}
