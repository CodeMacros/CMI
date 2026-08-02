import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCashBook } from './daily-cash-book';

describe('DailyCashBook', () => {
  let component: DailyCashBook;
  let fixture: ComponentFixture<DailyCashBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyCashBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyCashBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
