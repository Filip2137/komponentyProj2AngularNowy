import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceIndexComponent } from './seance-index.component';

describe('SeanceIndexComponent', () => {
  let component: SeanceIndexComponent;
  let fixture: ComponentFixture<SeanceIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeanceIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
