import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modifypar } from './modifypar';

describe('Modifypar', () => {
  let component: Modifypar;
  let fixture: ComponentFixture<Modifypar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modifypar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modifypar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
