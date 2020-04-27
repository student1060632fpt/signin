import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";

import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { Ex1HeaderComponent } from "./ex-component-1/ex1-header/ex1-header.component";
import { Ex1FooterComponent } from "./ex-component-1/ex1-footer/ex1-footer.component";
import { Ex1ContentComponent } from "./ex-component-1/ex1-content/ex1-content.component";
import { Ex1SidebarComponent } from "./ex-component-1/ex1-sidebar/ex1-sidebar.component";
import { Ex1IndexComponent } from "./ex-component-1/ex1-index/ex1-index.component";
import { Ex2IndexComponent } from "./ex-component-2/ex2-index/ex2-index.component";
import { Ex2HeaderComponent } from "./ex-component-2/ex2-header/ex2-header.component";
import { Ex2CarouselComponent } from "./ex-component-2/ex2-carousel/ex2-carousel.component";
import { Ex2FooterComponent } from "./ex-component-2/ex2-footer/ex2-footer.component";
import { Ex2ContentComponent } from "./ex-component-2/ex2-content/ex2-content.component";
import { Ex2ItemComponent } from "./ex-component-2/ex2-item/ex2-item.component";
import { DemoDatabindingComponent } from "./databinding/demo-databinding/demo-databinding.component";
import { FormsModule } from "@angular/forms";
import { DatabindingExComponent } from "./databinding/databinding-ex/databinding-ex.component";
import { DemoDirectivesComponent } from "./directives/demo-directives/demo-directives.component";
import { DirectiveEx1Component } from "./directives/directive-ex1/directive-ex1.component";
import { DirectiveEx2Component } from "./directives/directive-ex2/directive-ex2.component";
import { DemoCommunicationComponent } from "./communication/demo-communication/demo-communication.component";
import { StudentListComponent } from "./communication/student-list/student-list.component";
import { StudentItemComponent } from "./communication/student-item/student-item.component";
import { SeatListComponent } from "./bus-excercise/seat-list/seat-list.component";
import { SeatItemComponent } from "./bus-excercise/seat-item/seat-item.component";
import { SignupModule } from "./Elearning/pages/sign-up/sign-up.module";
import { SignInModule } from "./Elearning/pages/sign-in/sign-in.module";

@NgModule({
  //App module sẽ quản lý 2 component: App và Demo
  declarations: [
    AppComponent,
    DemoComponent,
    Ex1HeaderComponent,
    Ex1FooterComponent,
    Ex1ContentComponent,
    Ex1SidebarComponent,
    Ex1IndexComponent,
    Ex2IndexComponent,
    Ex2HeaderComponent,
    Ex2CarouselComponent,
    Ex2FooterComponent,
    Ex2ContentComponent,
    Ex2ItemComponent,
    DemoDatabindingComponent,
    DatabindingExComponent,
    DemoDirectivesComponent,
    DirectiveEx1Component,
    DirectiveEx2Component,
    DemoCommunicationComponent,
    StudentListComponent,
    StudentItemComponent,
    SeatListComponent,
    SeatItemComponent,
  ],
  //gắn những module khác vào app module để dùng
  // => tất cả component mà app module đang quản lý, đều sẽ sử dụng
  // được các tính năng của FormsModule mà không cần làm gì thêm
  imports: [BrowserModule, FormsModule, SignupModule, SignInModule],
  providers: [],
  bootstrap: [AppComponent],
})

// MODULE -- Componen1
//        -- Component2
export class AppModule {}
