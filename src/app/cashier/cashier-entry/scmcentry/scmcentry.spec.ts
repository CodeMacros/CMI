import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scmcentry } from './scmcentry';

describe('Scmcentry', () => {
  let component: Scmcentry;
  let fixture: ComponentFixture<Scmcentry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scmcentry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scmcentry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
