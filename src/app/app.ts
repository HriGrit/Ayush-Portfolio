import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Hero, About, Experience, Projects, Skills],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('Ayush-Portfolio');
}
