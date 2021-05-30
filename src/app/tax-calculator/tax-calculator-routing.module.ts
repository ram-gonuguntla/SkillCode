import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BasicDetailsComponent } from "./basic-details/basic-details.component";
import { InvestmentDetailsComponent } from "./investment-details/investment-details.component";
import { SummaryDetailsComponent } from "./summary-details/summary-details.component";
import { TaxCalculatorComponent } from "./tax-calculator/tax-calculator.component";

const routes: Routes = [
  {
    path: "",
    component: TaxCalculatorComponent,
    children: [
      {
        path: "basicDetails",
        component: BasicDetailsComponent,
      },
      {
        path: "investments",
        component: InvestmentDetailsComponent,
      },
      {
        path: "summary",
        component: SummaryDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxCalculatorRoutingModule {}
