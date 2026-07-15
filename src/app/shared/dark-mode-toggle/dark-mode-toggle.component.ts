import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dark-mode-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dark-mode-toggle.component.html',
  styleUrl: './dark-mode-toggle.component.scss'
})
export class DarkModeToggleComponent implements OnInit {
  isDarkMode = false;

  ngOnInit(): void {
    // Check for saved preference or system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      this.isDarkMode = savedMode === 'true';
    } else {
      // Check system preference
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyDarkMode();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.applyDarkMode();
  }

  private applyDarkMode(): void {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
