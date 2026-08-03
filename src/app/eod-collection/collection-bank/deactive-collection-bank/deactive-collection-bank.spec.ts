import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactiveCollectionBank } from './deactive-collection-bank';

describe('DeactiveCollectionBank', () => {
  let component: DeactiveCollectionBank;
  let fixture: ComponentFixture<DeactiveCollectionBank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeactiveCollectionBank]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeactiveCollectionBank);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
