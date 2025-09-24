import { Component, computed, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  private readonly data = inject(PortfolioDataService);
  readonly info = signal<{ name: string; github: string; linkedin: string } | null>(null);

  constructor() {
    this.info.set(this.data.getPersonalInfo());
  }
}
