import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderGameComponent } from './order-game.component';

describe('OrderGameComponent', () => {
  let component: OrderGameComponent;
  let fixture: ComponentFixture<OrderGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
