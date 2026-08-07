import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaharaPolicyInquiry } from './sahara-policy-inquiry';

describe('SaharaPolicyInquiry', () => {
  let component: SaharaPolicyInquiry;
  let fixture: ComponentFixture<SaharaPolicyInquiry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaharaPolicyInquiry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaharaPolicyInquiry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
