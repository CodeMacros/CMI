import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfscUpload } from './ifsc-upload';

describe('IfscUpload', () => {
  let component: IfscUpload;
  let fixture: ComponentFixture<IfscUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfscUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfscUpload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
