import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoOutward } from './auto-outward';

describe('AutoOutward', () => {
  let component: AutoOutward;
  let fixture: ComponentFixture<AutoOutward>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoOutward]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoOutward);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
