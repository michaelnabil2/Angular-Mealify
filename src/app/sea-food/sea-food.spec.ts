import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaFood } from './sea-food';

describe('SeaFood', () => {
  let component: SeaFood;
  let fixture: ComponentFixture<SeaFood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeaFood]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeaFood);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
