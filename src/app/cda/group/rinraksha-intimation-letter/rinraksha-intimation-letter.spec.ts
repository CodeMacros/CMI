import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RinrakshaIntimationLetter } from './rinraksha-intimation-letter';

describe('RinrakshaIntimationLetter', () => {
  let component: RinrakshaIntimationLetter;
  let fixture: ComponentFixture<RinrakshaIntimationLetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RinrakshaIntimationLetter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RinrakshaIntimationLetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
