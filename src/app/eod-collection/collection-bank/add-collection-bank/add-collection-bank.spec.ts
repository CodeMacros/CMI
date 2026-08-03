import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCollectionBank } from './add-collection-bank';

describe('AddCollectionBank', () => {
  let component: AddCollectionBank;
  let fixture: ComponentFixture<AddCollectionBank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCollectionBank]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCollectionBank);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
