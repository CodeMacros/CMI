import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLANSurakshaDetails } from './update-lansuraksha-details';

describe('UpdateLANSurakshaDetails', () => {
  let component: UpdateLANSurakshaDetails;
  let fixture: ComponentFixture<UpdateLANSurakshaDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLANSurakshaDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLANSurakshaDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
