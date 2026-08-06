import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupApproval } from './group-approval';

describe('GroupApproval', () => {
  let component: GroupApproval;
  let fixture: ComponentFixture<GroupApproval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupApproval]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupApproval);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
