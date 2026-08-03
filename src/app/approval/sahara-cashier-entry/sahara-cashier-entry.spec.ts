import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaharaCashierEntry } from './sahara-cashier-entry';

describe('SaharaCashierEntry', () => {
  let component: SaharaCashierEntry;
  let fixture: ComponentFixture<SaharaCashierEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaharaCashierEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaharaCashierEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
