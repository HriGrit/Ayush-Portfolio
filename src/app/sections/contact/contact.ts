import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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

  readonly form: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    message: FormControl<string>;
  }> = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]]
  });

  onSubmit(): void {
    if (this.form.invalid) {
      alert('Something went wrong')
      return;
    }

    alert('Submitting')
    const { name, email, message } = this.form.getRawValue();
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:ayushsoam15@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }
}
