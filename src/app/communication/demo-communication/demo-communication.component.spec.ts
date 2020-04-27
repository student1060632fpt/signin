import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCommunicationComponent } from './demo-communication.component';

describe('DemoCommunicationComponent', () => {
  let component: DemoCommunicationComponent;
  let fixture: ComponentFixture<DemoCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
