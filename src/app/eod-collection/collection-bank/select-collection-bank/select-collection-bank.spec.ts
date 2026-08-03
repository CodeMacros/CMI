import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCollectionBank } from './select-collection-bank';

describe('SelectCollectionBank', () => {
  let component: SelectCollectionBank;
  let fixture: ComponentFixture<SelectCollectionBank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectCollectionBank]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCollectionBank);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
