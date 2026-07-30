import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackOutward } from './track-outward';

describe('TrackOutward', () => {
  let component: TrackOutward;
  let fixture: ComponentFixture<TrackOutward>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackOutward]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackOutward);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
