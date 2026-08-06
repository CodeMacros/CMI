import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPCashierEntry } from './ipcashier-entry';

describe('IPCashierEntry', () => {
  let component: IPCashierEntry;
  let fixture: ComponentFixture<IPCashierEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPCashierEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPCashierEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
