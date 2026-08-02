import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveCollectionBank } from './approve-collection-bank';

describe('ApproveCollectionBank', () => {
  let component: ApproveCollectionBank;
  let fixture: ComponentFixture<ApproveCollectionBank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveCollectionBank]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveCollectionBank);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
