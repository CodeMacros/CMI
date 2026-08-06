import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemove } from './add-remove';

describe('AddRemove', () => {
  let component: AddRemove;
  let fixture: ComponentFixture<AddRemove>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRemove]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRemove);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
