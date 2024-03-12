import {Component, input} from '@angular/core';

@Component({
  selector: 'labs-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  description = input();
}
