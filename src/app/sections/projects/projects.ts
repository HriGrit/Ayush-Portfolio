import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Projects {
  private readonly data = inject(PortfolioDataService);
  readonly items = signal<Project[]>([]);

  constructor() {
    this.data.getProjects().subscribe((list) => this.items.set(list));
  }
}
