import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EodCollection } from './eod-collection';

describe('EodCollection', () => {
  let component: EodCollection;
  let fixture: ComponentFixture<EodCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EodCollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EodCollection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
