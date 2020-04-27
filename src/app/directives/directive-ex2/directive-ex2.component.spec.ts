import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveEx2Component } from './directive-ex2.component';

describe('DirectiveEx2Component', () => {
  let component: DirectiveEx2Component;
  let fixture: ComponentFixture<DirectiveEx2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveEx2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
