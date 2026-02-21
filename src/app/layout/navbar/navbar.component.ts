import { Component, signal, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private portfolioService = inject(PortfolioService);
  data = this.portfolioService.data;

  scrolled = signal(false);
  activeLink = signal('Home');

  @HostListener('window:scroll')
  onScroll(): void {
    const threshold = this.data()?.navigation.scrollThreshold ?? 60;
    this.scrolled.set(window.scrollY > threshold);
  }

  setActive(link: string): void {
    this.activeLink.set(link);
  }
}
