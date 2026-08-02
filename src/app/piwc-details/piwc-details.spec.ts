import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiwcDetails } from './piwc-details';

describe('PiwcDetails', () => {
  let component: PiwcDetails;
  let fixture: ComponentFixture<PiwcDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiwcDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiwcDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
