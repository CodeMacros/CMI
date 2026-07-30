import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Outward } from './outward';

describe('Outward', () => {
  let component: Outward;
  let fixture: ComponentFixture<Outward>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Outward]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Outward);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
