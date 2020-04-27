import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignInIndexComponent } from "./sign-in-index/sign-in-index.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInIndexComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SignInIndexComponent],
})
export class SignInModule {}
