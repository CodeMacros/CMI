import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveDcb } from './approve-dcb';

describe('ApproveDcb', () => {
  let component: ApproveDcb;
  let fixture: ComponentFixture<ApproveDcb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveDcb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveDcb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
