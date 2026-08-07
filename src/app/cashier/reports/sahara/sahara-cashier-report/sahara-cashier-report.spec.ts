import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaharaCashierReport } from './sahara-cashier-report';

describe('SaharaCashierReport', () => {
  let component: SaharaCashierReport;
  let fixture: ComponentFixture<SaharaCashierReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaharaCashierReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaharaCashierReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
