import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSubmitComponent } from './text-submit.component';

describe('TextSubmitComponent', () => {
  let component: TextSubmitComponent;
  let fixture: ComponentFixture<TextSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
