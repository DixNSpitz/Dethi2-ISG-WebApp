import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTipsPageComponent } from './shared-tips-page.component';

describe('SharedTipsPageComponent', () => {
  let component: SharedTipsPageComponent;
  let fixture: ComponentFixture<SharedTipsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedTipsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedTipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
