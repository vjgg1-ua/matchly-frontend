import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  standalone: true
})
export class Navbar {
  public theme = localStorage.getItem('theme');

  constructor(private themeService: ThemeService){}

  toggleTheme() {
    this.themeService.toggleTheme();
    this.theme = localStorage.getItem('theme');
  }
}
