import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrls: ['./demo-directives.component.scss'],
})
export class DemoDirectivesComponent implements OnInit {
  isLogin: boolean = false;
  month: number = 1;
  monthArr: { value: number; label: string; dateInMonth: number }[] = [
    { value: 1, label: 'Tháng 1', dateInMonth: 31 },
    { value: 2, label: 'Tháng 2', dateInMonth: 28 },
    { value: 3, label: 'Tháng 3', dateInMonth: 31 },
    { value: 4, label: 'Tháng 4', dateInMonth: 30 },
    { value: 5, label: 'Tháng 5', dateInMonth: 31 },
  ];
  constructor() {}

  ngOnInit(): void {}

  updateMonth(event) {
    this.month = event.target.value;
  }
  //shape nó chỉ nhận 2 giá trị: circle hoặc square
  // union type
  shape: 'circle' | 'square' = 'square';

  //ng style
  background = '#ff00ee';
  color = '#ffffff';
}
