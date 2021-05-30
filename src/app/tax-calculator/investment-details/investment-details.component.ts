import { Component, OnInit } from "@angular/core";
import { ControlContainer } from "@angular/forms";

@Component({
  selector: "app-investment-details",
  templateUrl: "./investment-details.component.html",
  styleUrls: ["./investment-details.component.scss"],
})
export class InvestmentDetailsComponent implements OnInit {
  public parentFrom;
  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    this.parentFrom = this.controlContainer.control;
  }

  get investmentFG() {
    return this.parentFrom.controls.investmentDetails;
  }
}
