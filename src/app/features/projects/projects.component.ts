import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { InViewDirective } from '../../shared/directives/in-view.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ButtonComponent, InViewDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private portfolioService = inject(PortfolioService);
  data = this.portfolioService.data;
  visible = signal(false);

  onInView(): void { this.visible.set(true); }

  getColor(lang: string, colors: Record<string, string>): string {
    return colors[lang] ?? '#ccc';
  }

  padIndex(i: number): string {
    return String(i + 1).padStart(2, '0');
  }
}
