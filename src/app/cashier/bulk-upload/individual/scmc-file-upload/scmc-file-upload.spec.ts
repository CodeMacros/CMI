import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScmcFileUpload } from './scmc-file-upload';

describe('ScmcFileUpload', () => {
  let component: ScmcFileUpload;
  let fixture: ComponentFixture<ScmcFileUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScmcFileUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScmcFileUpload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
