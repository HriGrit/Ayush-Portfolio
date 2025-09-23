import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Skill } from '../../models/skill.model';
import { computed } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Skills {
  private readonly data = inject(PortfolioDataService);
  readonly items = signal<Skill[]>([]);

  readonly byCategory = computed(() => {
    const grouped: Record<string, Skill[]> = {};
    for (const s of this.items()) {
      grouped[s.category] = grouped[s.category] ?? [];
      grouped[s.category].push(s);
    }
    return grouped;
  });

  readonly categories = computed(() => Object.keys(this.byCategory()));

  constructor() {
    this.data.getSkills().subscribe((list) => this.items.set(list));
  }
}
