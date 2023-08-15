import { Component } from '@angular/core';

@Component({
  selector: 'app-souvenirs',
  templateUrl: './souvenirs.component.html',
  styleUrls: ['./souvenirs.component.css']
})
export class SouvenirsComponent {
  cards = [{img: 'brel1', ahref: ''}, 
          {img: 'brel2', ahref: ''}, 
          {img: 'brel3', ahref: ''},
          {img: 'brel4', ahref: ''},
          {img: 'brel5', ahref: ''}];
  activeIndex!: string;
  focusItem(newItem: string) {
    this.activeIndex = newItem;
  }
}
