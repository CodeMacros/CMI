import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilePayment } from './upload-file-payment';

describe('UploadFilePayment', () => {
  let component: UploadFilePayment;
  let fixture: ComponentFixture<UploadFilePayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadFilePayment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadFilePayment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
