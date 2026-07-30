import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInward } from './edit-inward';

describe('EditInward', () => {
  let component: EditInward;
  let fixture: ComponentFixture<EditInward>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditInward]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInward);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
