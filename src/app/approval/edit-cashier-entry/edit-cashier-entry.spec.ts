import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCashierEntry } from './edit-cashier-entry';

describe('EditCashierEntry', () => {
  let component: EditCashierEntry;
  let fixture: ComponentFixture<EditCashierEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCashierEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCashierEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
