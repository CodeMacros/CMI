import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamictable } from './dynamictable';

describe('Dynamictable', () => {
  let component: Dynamictable;
  let fixture: ComponentFixture<Dynamictable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dynamictable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dynamictable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
