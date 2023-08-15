import { Component, Input, Output, EventEmitter  } from '@angular/core';

interface cardObj{
  img: string,
  ahref: string
}

@Component({
  selector: 'app-cardnd',
  templateUrl: './cardnd.component.html',
  styleUrls: ['./cardnd.component.css']
})
export class CardndComponent {
  @Input() data: cardObj = {img: '', ahref: ''};
  @Output() select = new EventEmitter<string>();

  pushItem(value: string) {
    this.select.emit(value);
  }
}