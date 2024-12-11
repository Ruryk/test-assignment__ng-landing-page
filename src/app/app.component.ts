import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { FooterComponent } from './components/ui-blocks/footer/footer.component';
import { HeaderComponent } from './components/ui-blocks/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
