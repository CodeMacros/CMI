import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealiseChequ } from './realise-chequ';

describe('RealiseChequ', () => {
  let component: RealiseChequ;
  let fixture: ComponentFixture<RealiseChequ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealiseChequ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealiseChequ);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
