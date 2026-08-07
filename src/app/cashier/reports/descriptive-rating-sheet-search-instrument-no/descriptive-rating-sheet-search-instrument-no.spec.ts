import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptiveRatingSheetSearchInstrumentNo } from './descriptive-rating-sheet-search-instrument-no';

describe('DescriptiveRatingSheetSearchInstrumentNo', () => {
  let component: DescriptiveRatingSheetSearchInstrumentNo;
  let fixture: ComponentFixture<DescriptiveRatingSheetSearchInstrumentNo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptiveRatingSheetSearchInstrumentNo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptiveRatingSheetSearchInstrumentNo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
