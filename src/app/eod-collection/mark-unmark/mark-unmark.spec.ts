import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkUnmark } from './mark-unmark';

describe('MarkUnmark', () => {
  let component: MarkUnmark;
  let fixture: ComponentFixture<MarkUnmark>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkUnmark]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkUnmark);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
