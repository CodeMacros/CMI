import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackEdit } from './track-edit';

describe('TrackEdit', () => {
  let component: TrackEdit;
  let fixture: ComponentFixture<TrackEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
