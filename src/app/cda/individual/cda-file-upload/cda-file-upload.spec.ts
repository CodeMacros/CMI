import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdaFileUpload } from './cda-file-upload';

describe('CdaFileUpload', () => {
  let component: CdaFileUpload;
  let fixture: ComponentFixture<CdaFileUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdaFileUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdaFileUpload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
