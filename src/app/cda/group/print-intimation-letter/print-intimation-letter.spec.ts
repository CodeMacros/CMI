import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintIntimationLetter } from './print-intimation-letter';

describe('PrintIntimationLetter', () => {
  let component: PrintIntimationLetter;
  let fixture: ComponentFixture<PrintIntimationLetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintIntimationLetter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintIntimationLetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
