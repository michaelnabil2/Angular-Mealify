import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Breakfast } from './breakfast';

describe('Breakfast', () => {
  let component: Breakfast;
  let fixture: ComponentFixture<Breakfast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Breakfast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Breakfast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
