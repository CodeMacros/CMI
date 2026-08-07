import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectAwb } from './correct-awb';

describe('CorrectAwb', () => {
  let component: CorrectAwb;
  let fixture: ComponentFixture<CorrectAwb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrectAwb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectAwb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
