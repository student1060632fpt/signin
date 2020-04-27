import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss'],
})
export class StudentItemComponent implements OnInit {
  @Input() studentItem: { name: string; className: string };
  // @Input() info: number;

  @Output() studentEmitter = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  chooseStudent() {
    this.studentEmitter.emit(this.studentItem);
  }
}
