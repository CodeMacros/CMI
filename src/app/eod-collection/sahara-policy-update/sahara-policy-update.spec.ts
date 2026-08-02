import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaharaPolicyUpdate } from './sahara-policy-update';

describe('SaharaPolicyUpdate', () => {
  let component: SaharaPolicyUpdate;
  let fixture: ComponentFixture<SaharaPolicyUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaharaPolicyUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaharaPolicyUpdate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
