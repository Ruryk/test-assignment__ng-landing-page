import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, inject, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

// Models
import { TInputType } from '../../../core/types/inputs.types';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  @Input() placeholder = 'Type...';
  @Input() type: TInputType = 'text';

  public value: string | null = '';
  public disabled: boolean = false;

  public onChange: (value: string) => void;
  public onTouched: () => void;

  writeValue(value: string | null): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  changeValue(value: string): void {
    this.onChange(value);
    this.onTouched();
  }
}
