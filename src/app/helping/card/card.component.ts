import { Component, Input, Output, EventEmitter } from '@angular/core';

interface cardObj{
  img: string,
  title: string,
  p: string,
  ahref: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() data: cardObj = {img: '', title: '', p: '', ahref: ''};
  @Output() select = new EventEmitter<string>();

  pushItem(value: string) {
    this.select.emit(value);
  }
}
