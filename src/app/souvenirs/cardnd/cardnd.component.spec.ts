import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardndComponent } from './cardnd.component';

describe('CardndComponent', () => {
  let component: CardndComponent;
  let fixture: ComponentFixture<CardndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
