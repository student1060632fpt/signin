import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingExComponent } from './databinding-ex.component';

describe('DatabindingExComponent', () => {
  let component: DatabindingExComponent;
  let fixture: ComponentFixture<DatabindingExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabindingExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
