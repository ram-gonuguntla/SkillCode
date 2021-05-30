import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BasicDetailsComponent } from "./basic-details/basic-details.component";
import { InvestmentDetailsComponent } from "./investment-details/investment-details.component";
import { SummaryDetailsComponent } from "./summary-details/summary-details.component";
import { TaxCalculatorRoutingModule } from "./tax-calculator-routing.module";
import { TaxCalculatorComponent } from "./tax-calculator/tax-calculator.component";
import { ShareModule } from "../share/share.module";

@NgModule({
  declarations: [
    BasicDetailsComponent,
    InvestmentDetailsComponent,
    SummaryDetailsComponent,
    TaxCalculatorComponent,
  ],
  imports: [CommonModule, TaxCalculatorRoutingModule, ShareModule],
})
export class TaxCalculatorModule {}
