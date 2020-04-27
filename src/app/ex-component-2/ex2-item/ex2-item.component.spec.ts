import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2ItemComponent } from './ex2-item.component';

describe('Ex2ItemComponent', () => {
  let component: Ex2ItemComponent;
  let fixture: ComponentFixture<Ex2ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex2ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
