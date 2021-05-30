import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NavigationStart, Router } from "@angular/router";

@Component({
  selector: "app-tax-calculator",
  templateUrl: "./tax-calculator.component.html",
  styleUrls: ["./tax-calculator.component.scss"],
})
export class TaxCalculatorComponent implements OnInit {
  // public taxForm: FormGroup;
  // public taxChildRoutes: string[] = [
  //   "/tax-calculator/basicDetails",
  //   "/tax-calculator/investments",
  //   "/tax-calculator/summary",
  // ];
  // public currentRoute: string;
  // constructor(private fb: FormBuilder, private router: Router,) {}

  ngOnInit() {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart) {
    //     this.currentRoute = event.url;
    //   }
    // });
    // this.taxForm = this.fb.group({
    //   basicDetails: this.fb.group({
    //     annualIncome: ["", Validators.required],
    //     name: ["", Validators.required],
    //   }),
    //   investmentDetails: this.fb.group({
    //     monthlyRent: [""],
    //     rentAllowance: [""],
    //   }),
    // });
  }
}
