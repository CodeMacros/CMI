import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCdaDetails } from './view-cda-details';

describe('ViewCdaDetails', () => {
  let component: ViewCdaDetails;
  let fixture: ComponentFixture<ViewCdaDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCdaDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCdaDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
