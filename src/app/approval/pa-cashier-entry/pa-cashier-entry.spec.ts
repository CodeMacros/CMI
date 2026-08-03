import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaCashierEntry } from './pa-cashier-entry';

describe('PaCashierEntry', () => {
  let component: PaCashierEntry;
  let fixture: ComponentFixture<PaCashierEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaCashierEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaCashierEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
