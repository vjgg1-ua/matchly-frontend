import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Navbar } from './components/navbar/navbar';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, ToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('matchly-frontend');
  showNavbar = true;

  constructor(private router: Router){
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      const hiddenRoutes = ['/login', '/register'];

      this.showNavbar = !hiddenRoutes.includes(this.router.url);
    })
  }
}
