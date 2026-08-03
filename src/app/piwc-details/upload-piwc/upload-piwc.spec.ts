import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPiwc } from './upload-piwc';

describe('UploadPiwc', () => {
  let component: UploadPiwc;
  let fixture: ComponentFixture<UploadPiwc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadPiwc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPiwc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
