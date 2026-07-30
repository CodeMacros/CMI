import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pacashierentry } from './pacashierentry';

describe('Pacashierentry', () => {
  let component: Pacashierentry;
  let fixture: ComponentFixture<Pacashierentry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pacashierentry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pacashierentry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
