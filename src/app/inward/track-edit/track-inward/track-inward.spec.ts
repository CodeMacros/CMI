import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackInward } from './track-inward';

describe('TrackInward', () => {
  let component: TrackInward;
  let fixture: ComponentFixture<TrackInward>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackInward]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackInward);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
