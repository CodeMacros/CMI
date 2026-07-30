import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousInward } from './miscellaneous-inward';

describe('MiscellaneousInward', () => {
  let component: MiscellaneousInward;
  let fixture: ComponentFixture<MiscellaneousInward>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiscellaneousInward]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscellaneousInward);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
