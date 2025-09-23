import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Hero {
  private readonly data = inject(PortfolioDataService);
  readonly info = signal<{ name: string; github: string; linkedin: string } | null>(null);

  constructor() {
    this.data.getPersonalInfo().subscribe((i) => this.info.set(i));
  }
}
