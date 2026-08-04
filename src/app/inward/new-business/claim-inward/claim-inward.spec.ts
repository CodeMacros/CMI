import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimInward } from './claim-inward';

describe('ClaimInward', () => {
  let component: ClaimInward;
  let fixture: ComponentFixture<ClaimInward>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimInward]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimInward);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
