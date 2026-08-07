import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sahara } from './sahara';

describe('Sahara', () => {
  let component: Sahara;
  let fixture: ComponentFixture<Sahara>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sahara]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sahara);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
