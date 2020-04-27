import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-up-index",
  templateUrl: "./sign-up-index.component.html",
  styleUrls: ["./sign-up-index.component.scss"],
})
export class SignUpIndexComponent implements OnInit {
  formSignup: FormGroup;
  constructor() {}

  ngOnInit(): void {
    // chạy 1 lần đầu tiên (componentDidMount)
    this.formSignup = new FormGroup({
      taiKhoan: new FormControl("", [Validators.required]),
      matKhau: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]),
      hoTen: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      soDt: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]+$"),
      ]),
    });

    this.formSignup.patchValue({
      taiKhoan: 'dhaksjdhjk',
      matKhau: 'dhakjhsdakjsa',
      hoTen: '13123',
      email: 'dash@gmail.com',
      soDt: '123123'
    })
  }

  handleSubmit() {
    if(this.formSignup.invalid){
      this.formSignup.markAllAsTouched();
      return;
    };

    console.log(this.formSignup);
    this.formSignup.reset();
  }
}
