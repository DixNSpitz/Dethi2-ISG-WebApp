import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityGameComponent } from './humidity-game.component';

describe('HumidityGameComponent', () => {
  let component: HumidityGameComponent;
  let fixture: ComponentFixture<HumidityGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumidityGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumidityGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
