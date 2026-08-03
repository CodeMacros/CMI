import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureModifyDcb } from './capture-modify-dcb';

describe('CaptureModifyDcb', () => {
  let component: CaptureModifyDcb;
  let fixture: ComponentFixture<CaptureModifyDcb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptureModifyDcb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptureModifyDcb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
