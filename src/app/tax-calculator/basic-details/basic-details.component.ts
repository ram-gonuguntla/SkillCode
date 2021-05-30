import { Component, Input, OnInit } from "@angular/core";
import { ControlContainer, FormControl, FormGroup } from "@angular/forms";
import { SharedService } from "src/app/share/shared.service";

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
