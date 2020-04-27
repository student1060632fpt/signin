import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ex1',
  templateUrl: './directive-ex1.component.html',
  styleUrls: ['./directive-ex1.component.scss'],
})
export class DirectiveEx1Component implements OnInit {
  name: string;
  isLogin = false;

  constructor() {}

  ngOnInit(): void {}

  login(username: string, password: string) {
    if (username === 'cybersoft' && password === 'cybersoft') {
      this.name = username;
      this.isLogin = true;
    }
  }
}
