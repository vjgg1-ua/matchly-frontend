import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ThemeService {
  private readonly theme = 'theme';

  constructor(){
    this.loadTheme();
  }

  loadTheme() {
    const savedTheme = localStorage.getItem(this.theme) ?? 'light';

    this.setTheme(savedTheme);
  }

  setTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem(this.theme, theme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    this.setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme');
  }
}
