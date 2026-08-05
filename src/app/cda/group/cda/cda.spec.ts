import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cda } from './cda';

describe('Cda', () => {
  let component: Cda;
  let fixture: ComponentFixture<Cda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
