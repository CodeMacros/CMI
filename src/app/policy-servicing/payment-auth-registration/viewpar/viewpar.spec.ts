import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpar } from './viewpar';

describe('Viewpar', () => {
  let component: Viewpar;
  let fixture: ComponentFixture<Viewpar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewpar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewpar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
