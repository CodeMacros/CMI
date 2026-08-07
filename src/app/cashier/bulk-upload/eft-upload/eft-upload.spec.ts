import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EftUpload } from './eft-upload';

describe('EftUpload', () => {
  let component: EftUpload;
  let fixture: ComponentFixture<EftUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EftUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EftUpload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
