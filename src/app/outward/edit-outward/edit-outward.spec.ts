import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOutward } from './edit-outward';

describe('EditOutward', () => {
  let component: EditOutward;
  let fixture: ComponentFixture<EditOutward>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditOutward]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOutward);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
