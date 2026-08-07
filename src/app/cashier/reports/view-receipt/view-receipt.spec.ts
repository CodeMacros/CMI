import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReceipt } from './view-receipt';

describe('ViewReceipt', () => {
  let component: ViewReceipt;
  let fixture: ComponentFixture<ViewReceipt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewReceipt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewReceipt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
