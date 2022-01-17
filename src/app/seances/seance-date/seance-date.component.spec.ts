import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceDateComponent } from './seance-date.component';

describe('SeanceDateComponent', () => {
  let component: SeanceDateComponent;
  let fixture: ComponentFixture<SeanceDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeanceDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
