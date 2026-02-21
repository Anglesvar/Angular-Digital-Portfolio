import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { InViewDirective } from '../../shared/directives/in-view.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ButtonComponent, InViewDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private portfolioService = inject(PortfolioService);
  data = this.portfolioService.data;
  visible = signal(false);

  onInView(): void { this.visible.set(true); }
}
