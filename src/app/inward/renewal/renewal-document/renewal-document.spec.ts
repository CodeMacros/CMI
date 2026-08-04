import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalDocument } from './renewal-document';

describe('RenewalDocument', () => {
  let component: RenewalDocument;
  let fixture: ComponentFixture<RenewalDocument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenewalDocument]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewalDocument);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
