import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ShareModule } from "./share/share.module";
import { HomeComponent } from "./home/home.component";
import { StoreModule } from "@ngrx/store";
import { TaxReducer } from "./tax-calculator/tax-reducer";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    StoreModule.forRoot({ navigation: TaxReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
