import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Services
import { UserService } from '../../../core/services/user.service';

// Components
import { ButtonComponent } from '../../form-fields/button/button.component';
import { InputComponent } from '../../form-fields/input/input.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ButtonComponent,
    RouterLink,
    InputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly userService: UserService = inject(UserService);

  public formGroup: FormGroup = this.fb.group({
    name: ['Default Name', [Validators.required]],
    email: ['example@text.com', [Validators.required, Validators.email]],
    password: ['qwerty', [Validators.required]],
  });

  public onRegister(): void {
    if (!this.formGroup.valid) return;
    const formValue = this.formGroup.getRawValue();

    console.log('formValue', formValue);

    // this.userService.register(formValue);
  }
}
