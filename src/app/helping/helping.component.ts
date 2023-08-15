import { Component } from '@angular/core';

@Component({
  selector: 'app-helping',
  templateUrl: './helping.component.html',
  styleUrls: ['./helping.component.css']
})
export class HelpingComponent {
  cards = [{img: 'auto(1)', title: 'Авто', p: 'швидке пересування', ahref: ''}, 
          {img: 'drone(2)', title: 'дрони', p: 'наші очі у небі', ahref: ''}, 
          {img: 'radio(3)', title: 'Зв`язок', p: 'розмовне питання', ahref: ''},
          {img: 'ochi(4)', title: 'оптичні прилади', p: 'збільшуємо дальність обзору', ahref: ''},
          {img: 'bpla(5)', title: 'бпла', p: 'захист у небі', ahref: ''},
          {img: 'med(6)', title: 'тактична медицина', p: 'рятуємо життя', ahref: ''}];
  activeIndex!: string;
  focusItem(newItem: string) {
    this.activeIndex = newItem;
  }
}
