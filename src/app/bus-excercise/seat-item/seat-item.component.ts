import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat-item',
  templateUrl: './seat-item.component.html',
  styleUrls: ['./seat-item.component.scss'],
})
export class SeatItemComponent implements OnInit {
  @Input() seatItem: any;
  @Output() seatEmitter = new EventEmitter();
  isBooking = false;
  constructor() {}

  ngOnInit(): void {}

  bookSeat() {
    this.isBooking = !this.isBooking
    this.seatEmitter.emit(this.seatItem);
  }
}
