import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

// Components
import { ButtonComponent } from '../../form-fields/button/button.component';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [
    ButtonComponent,
    NgOptimizedImage
  ],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewComponent {

}
