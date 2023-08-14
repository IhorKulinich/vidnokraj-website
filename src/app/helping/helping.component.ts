import { Component } from '@angular/core';

@Component({
  selector: 'app-helping',
  templateUrl: './helping.component.html',
  styleUrls: ['./helping.component.css']
})
export class HelpingComponent {
  cards = [{img: '', title: '', p: '', ahref: ''}];
  activeIndex!: string;
  focusItem(newItem: string) {
    this.activeIndex = newItem;
  }
}
