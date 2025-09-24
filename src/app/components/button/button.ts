import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Button {
  readonly variant = input<'primary' | 'default'>('default');
  readonly href = input<string | null>(null);
  readonly content = input<string>("");
}
