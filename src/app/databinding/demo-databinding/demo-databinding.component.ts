import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-databinding',
  templateUrl: './demo-databinding.component.html',
  styleUrls: ['./demo-databinding.component.scss'],
})
export class DemoDatabindingComponent implements OnInit {
  title: string = 'dang trung hieu';
  imgUrl: string = 'https://i.picsum.photos/id/431/200/300.jpg';
  phoneNumber: string;

  constructor() {}

  ngOnInit(): void {}

  showTitle(value: string) {
    alert(this.title);
  }

  updatePhoneNumber(event) {
    //update phoneNumber = giá trị người dùng nhập
    this.phoneNumber = event.target.value;
  }

  showValue(e) {
    console.log(e.target.value);
    console.log(e.target.checked);
  }

  updatePhoneNumberWithClick(value: string) {
    console.log(value);
  }
}
