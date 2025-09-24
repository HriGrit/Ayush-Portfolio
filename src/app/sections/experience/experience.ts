import { Component, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Experience as ExperienceModel } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  private readonly data = inject(PortfolioDataService);
  readonly items = signal<ExperienceModel[]>([]);

  constructor() {
    this.items.set(this.data.getExperience());
  }
}
