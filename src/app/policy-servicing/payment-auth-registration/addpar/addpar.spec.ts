import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpar } from './addpar';

describe('Addpar', () => {
  let component: Addpar;
  let fixture: ComponentFixture<Addpar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addpar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addpar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
