import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveEx1Component } from './directive-ex1.component';

describe('DirectiveEx1Component', () => {
  let component: DirectiveEx1Component;
  let fixture: ComponentFixture<DirectiveEx1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveEx1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
