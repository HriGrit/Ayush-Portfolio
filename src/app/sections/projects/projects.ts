import { Component, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  private readonly data = inject(PortfolioDataService);
  readonly items = signal<Project[]>([]);

  constructor() {
    this.items.set(this.data.getProjects());
  }
}
