/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovieIndexComponent } from './movieIndex.component';

describe('MovieIndexComponent', () => {
  let component: MovieIndexComponent;
  let fixture: ComponentFixture<MovieIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
