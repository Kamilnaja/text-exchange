/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TextlistComponent } from './textlist.component';

describe('TextlistComponent', () => {
  let component: TextlistComponent;
  let fixture: ComponentFixture<TextlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
