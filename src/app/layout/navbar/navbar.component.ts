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

  scrolled   = signal(false);
  activeLink = signal('Home');
  menuOpen   = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    const threshold = this.data()?.navigation.scrollThreshold ?? 60;
    this.scrolled.set(window.scrollY > threshold);
  }

  // Close menu on Escape key
  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  setActive(link: string): void {
    this.activeLink.set(link);
    this.menuOpen.set(false); // close drawer after tapping a link
  }
}