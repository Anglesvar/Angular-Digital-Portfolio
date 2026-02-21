import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (data(); as d) {
      <footer class="footer">
        <span class="footer__logo">&lt;ANG /&gt;</span>
        <span class="footer__copy">
          &copy; {{ year }} {{ d.personal.firstName }} {{ d.personal.lastName }}.
          Built with Angular &amp; TypeScript.
        </span>
      </footer>
    }
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private portfolioService = inject(PortfolioService);
  data = this.portfolioService.data;
  year = new Date().getFullYear();
}
