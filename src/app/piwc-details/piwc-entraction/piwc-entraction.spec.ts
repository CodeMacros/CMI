import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiwcEntraction } from './piwc-entraction';

describe('PiwcEntraction', () => {
  let component: PiwcEntraction;
  let fixture: ComponentFixture<PiwcEntraction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiwcEntraction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiwcEntraction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
