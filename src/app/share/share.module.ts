import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NumberFieldComponent } from "./components/number-field/number-field.component";
import { TextFieldComponent } from "./components/text-field/text-field.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { PageSwitcherComponent } from "./components/page-switcher/page-switcher.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NumberFieldComponent,
    TextFieldComponent,
    PageSwitcherComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NumberFieldComponent,
    TextFieldComponent,
    PageSwitcherComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ShareModule {}
