import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionBank } from './collection-bank';

describe('CollectionBank', () => {
  let component: CollectionBank;
  let fixture: ComponentFixture<CollectionBank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionBank]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionBank);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
