import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDcb } from './view-dcb';

describe('ViewDcb', () => {
  let component: ViewDcb;
  let fixture: ComponentFixture<ViewDcb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDcb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDcb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
