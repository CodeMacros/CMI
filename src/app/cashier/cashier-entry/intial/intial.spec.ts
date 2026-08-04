import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intial } from './intial';

describe('Intial', () => {
  let component: Intial;
  let fixture: ComponentFixture<Intial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Intial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Intial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
