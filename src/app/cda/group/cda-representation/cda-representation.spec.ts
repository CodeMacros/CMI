import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdaRepresentation } from './cda-representation';

describe('CdaRepresentation', () => {
  let component: CdaRepresentation;
  let fixture: ComponentFixture<CdaRepresentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdaRepresentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdaRepresentation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
