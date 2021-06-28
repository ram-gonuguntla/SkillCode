import { Component, OnInit } from "@angular/core";
import { ControlContainer } from "@angular/forms";

@Component({
  selector: "app-basic-details",
  templateUrl: "./basic-details.component.html",
  styleUrls: ["./basic-details.component.scss"],
})
export class BasicDetailsComponent implements OnInit {
  public parentFrom;
  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    this.parentFrom = this.controlContainer.control;
  }

  get basicDetailsFG() {
    return this.parentFrom.controls.basicDetails;
  }
}
