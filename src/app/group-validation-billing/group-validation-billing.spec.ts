import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupValidationBilling } from './group-validation-billing';

describe('GroupValidationBilling', () => {
  let component: GroupValidationBilling;
  let fixture: ComponentFixture<GroupValidationBilling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupValidationBilling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupValidationBilling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
