import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  selectedStudent: { name: string; className: string };
  studentList: { name: string; className: string }[] = [
    { name: 'Hiếu', className: '13VLH1' },
    { name: 'Dũng', className: '13VLH2' },
    { name: 'Tài', className: '13VLH3' },
    { name: 'Tuấn', className: '13VLH4' },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleStudentEmitter(val) {
    this.selectedStudent = val;
  }
  
}
