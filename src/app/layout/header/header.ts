import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  readonly isMenuOpen = signal(false);
}
