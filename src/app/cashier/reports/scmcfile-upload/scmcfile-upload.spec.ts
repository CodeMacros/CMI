import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCMCFileUpload } from './scmcfile-upload';

describe('SCMCFileUpload', () => {
  let component: SCMCFileUpload;
  let fixture: ComponentFixture<SCMCFileUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SCMCFileUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SCMCFileUpload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
