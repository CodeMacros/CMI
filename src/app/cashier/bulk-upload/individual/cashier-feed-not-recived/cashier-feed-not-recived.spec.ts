import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierFeedNotRecived } from './cashier-feed-not-recived';

describe('CashierFeedNotRecived', () => {
  let component: CashierFeedNotRecived;
  let fixture: ComponentFixture<CashierFeedNotRecived>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashierFeedNotRecived]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashierFeedNotRecived);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
