import { formatNumber } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";
import { untilDestroyed } from "ngx-take-until-destroy";
import { SharedService } from "src/app/share/shared.service";
import { taxFControllers } from "../tax.model";

interface SlabInfo {
  slabValue: number;
  slabPerc: number;
}

@Component({
  selector: "app-summary-details",
  templateUrl: "./summary-details.component.html",
  styleUrls: ["./summary-details.component.scss"],
})
export class SummaryDetailsComponent implements OnInit, OnDestroy {
  public userName;
  public parentFrom;
  public taxValue: string;
  private taxControllers: taxFControllers;
  private slabsInfo: SlabInfo[];
  constructor(
    private controlContainer: ControlContainer,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.parentFrom = this.controlContainer.control as FormGroup;
    this.taxControllers = this.parentFrom.getRawValue();
    const annualIncome: number = this.taxControllers.basicDetails.annualIncome;
    const monthlyRent: number =
      this.taxControllers.investmentDetails.monthlyRent;
    const rentAllowance: number =
      this.taxControllers.investmentDetails.rentAllowance;
    const actualAllowedRentAllowance: number = this.getExecemptionRentAllowance(
      monthlyRent,
      rentAllowance,
      annualIncome
    );
    this.sharedService
      .getHttp("assets/tax-slabs.json")
      .pipe(untilDestroyed(this))
      .subscribe((data: SlabInfo[]) => {
        this.slabsInfo = data;
        const result =
          this.slabsCalculations(annualIncome) - actualAllowedRentAllowance;
        this.taxValue = formatNumber(result, "en-US", ".0-0");
      });
  }

  getExecemptionRentAllowance(
    monthlyRent: number,
    rentAllowance: number,
    annualIncome: number
  ): number {
    const basicPay = this.getValueUsingPerc(annualIncome, 50);
    const considerableRent =
      rentAllowance && monthlyRent && monthlyRent > rentAllowance
        ? rentAllowance
        : monthlyRent;
    const tenPercBasicPay: number = this.getValueUsingPerc(basicPay, 10);
    const actualRentExcemption =
      considerableRent && considerableRent * 12 > tenPercBasicPay
        ? considerableRent * 12 - tenPercBasicPay
        : 0;
    return actualRentExcemption;
  }

  private slabsCalculations(sal: number): number {
    let taxValue = 0;
    let remaingSalary: number = sal;
    this.slabsInfo.forEach((val, index) => {
      if (remaingSalary >= val.slabValue) {
        const getval = this.slabsInfo[index + 1]
          ? remaingSalary - this.slabsInfo[index + 1].slabValue
          : remaingSalary;
        taxValue = taxValue + this.getValueUsingPerc(getval, val.slabPerc);
        remaingSalary = this.slabsInfo[index + 1]
          ? this.slabsInfo[index + 1].slabValue
          : 0;
      }
    });

    return taxValue;
  }
  private getValueUsingPerc(val: number, per: number): number {
    const result: number = (per * val) / 100;
    return result;
  }

  ngOnDestroy() {
    // untildestroyed required this
  }
}
