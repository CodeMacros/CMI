import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingInstrumentReport } from './pending-instrument-report';

describe('PendingInstrumentReport', () => {
  let component: PendingInstrumentReport;
  let fixture: ComponentFixture<PendingInstrumentReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingInstrumentReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingInstrumentReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
