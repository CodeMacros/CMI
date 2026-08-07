import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpCeFileUpload } from './ip-ce-file-upload';

describe('IpCeFileUpload', () => {
  let component: IpCeFileUpload;
  let fixture: ComponentFixture<IpCeFileUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpCeFileUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpCeFileUpload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
