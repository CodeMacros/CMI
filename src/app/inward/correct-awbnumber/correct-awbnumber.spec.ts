import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectAWBNumber } from './correct-awbnumber';

describe('CorrectAWBNumber', () => {
  let component: CorrectAWBNumber;
  let fixture: ComponentFixture<CorrectAWBNumber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrectAWBNumber]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectAWBNumber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
