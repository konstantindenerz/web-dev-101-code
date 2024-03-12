import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CardComponent} from './card/card.component';

@Component({
  selector: 'labs-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  description = "Lorem ipsum dolor sit amet consectetur. Pellentesque tempor a lorem aenean pulvinar at. Ultrices proin arcu at\n" +
    "    viverra odio mollis et dictum. Tellus elementum tortor metus at pretium at. Dictum tincidunt viverra ultrices lectus\n" +
    "    aliquam.";
}
