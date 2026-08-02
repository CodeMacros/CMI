import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrCode } from './micr-code';

describe('MicrCode', () => {
  let component: MicrCode;
  let fixture: ComponentFixture<MicrCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrCode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
