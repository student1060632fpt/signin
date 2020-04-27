import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignUpIndexComponent } from "./sign-up-index/sign-up-index.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [SignUpIndexComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SignUpIndexComponent],
})
export class SignupModule {}
