import { ChangeDetectionStrategy, Component } from '@angular/core';

// Components
import { PreviewComponent } from '../../components/ui-blocks/preview/preview.component';
import { AboutComponent } from '../../components/ui-blocks/about/about.component';
import { RegisterComponent } from '../../components/ui-blocks/register/register.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    PreviewComponent,
    AboutComponent,
    RegisterComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {

}
