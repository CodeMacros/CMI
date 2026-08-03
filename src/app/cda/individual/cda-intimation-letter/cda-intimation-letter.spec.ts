import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdaIntimationLetter } from './cda-intimation-letter';

describe('CdaIntimationLetter', () => {
  let component: CdaIntimationLetter;
  let fixture: ComponentFixture<CdaIntimationLetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdaIntimationLetter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdaIntimationLetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
