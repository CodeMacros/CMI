import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addsubpar } from './addsubpar';

describe('Addsubpar', () => {
  let component: Addsubpar;
  let fixture: ComponentFixture<Addsubpar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addsubpar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addsubpar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
