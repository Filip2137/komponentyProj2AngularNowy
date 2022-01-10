import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceAddComponent } from './seance-add.component';

describe('SeanceAddComponent', () => {
  let component: SeanceAddComponent;
  let fixture: ComponentFixture<SeanceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeanceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
