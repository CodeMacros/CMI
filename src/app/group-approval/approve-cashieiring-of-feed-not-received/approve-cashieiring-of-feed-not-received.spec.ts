import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveCashieiringOfFeedNotReceived } from './approve-cashieiring-of-feed-not-received';

describe('ApproveCashieiringOfFeedNotReceived', () => {
  let component: ApproveCashieiringOfFeedNotReceived;
  let fixture: ComponentFixture<ApproveCashieiringOfFeedNotReceived>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveCashieiringOfFeedNotReceived]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveCashieiringOfFeedNotReceived);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
