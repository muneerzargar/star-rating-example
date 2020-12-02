import { Component } from '@angular/core';
import { IStar } from './starInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ratingValue = 0;
  starList: IStar[] = [{
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  }
];

  onStarClicked( item: IStar) {
    this.ratingValue = this.starList.findIndex((star) => star.id === item.id) + 1;
    const list = this.starList.slice(0, this.ratingValue);
    list.forEach((value) => value.selected = true);
    this.starList = [...new Set([].concat([...list, ...this.starList]))];
  }
}
