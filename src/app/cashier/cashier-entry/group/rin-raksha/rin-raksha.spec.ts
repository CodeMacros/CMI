import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RinRaksha } from './rin-raksha';

describe('RinRaksha', () => {
  let component: RinRaksha;
  let fixture: ComponentFixture<RinRaksha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RinRaksha]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RinRaksha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
