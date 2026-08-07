import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reprint } from './reprint';

describe('Reprint', () => {
  let component: Reprint;
  let fixture: ComponentFixture<Reprint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reprint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reprint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
