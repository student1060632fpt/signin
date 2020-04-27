import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-ex',
  templateUrl: './databinding-ex.component.html',
  styleUrls: ['./databinding-ex.component.scss'],
})
export class DatabindingExComponent implements OnInit {
  email: string;
  fullName: string;
  constructor() {}

  ngOnInit(): void {}

  updateFullName(value: string) {
    this.fullName = value;
  }
}
