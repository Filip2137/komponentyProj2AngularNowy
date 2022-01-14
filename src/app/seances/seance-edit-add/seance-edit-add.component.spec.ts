import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceEditAddComponent } from './seance-edit-add.component';

describe('SeanceEditAddComponent', () => {
  let component: SeanceEditAddComponent;
  let fixture: ComponentFixture<SeanceEditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeanceEditAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
