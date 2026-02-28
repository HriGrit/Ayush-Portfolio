import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contact {
  private readonly formBuilder = inject(FormBuilder);

  submitted = signal(false);

  readonly form: FormGroup<{
    subject: FormControl<string>;
    message: FormControl<string>;
  }> = this.formBuilder.nonNullable.group({
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]]
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { subject, message } = this.form.getRawValue();
    const mailto = `mailto:ayushsoam15@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.location.href = mailto;
    this.submitted.set(true);

    // Optional: Reset form after a delay or keep it as is
    // this.form.reset();
  }
}
