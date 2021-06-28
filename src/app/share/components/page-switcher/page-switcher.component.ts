import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NavigationStart, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { updateNavState } from "src/app/tax-calculator/tax-actions";

@Component({
  selector: "app-page-switcher",
  templateUrl: "./page-switcher.component.html",
  styleUrls: ["./page-switcher.component.scss"],
})
export class PageSwitcherComponent implements OnInit {
  @Input() public preBtnDisabled: boolean;
  @Input() public nextBtnDisabled: boolean;
  @Input() private taxChildRoutes: string[];
  @Input() public form: FormGroup;
  public showBackBtn: boolean;
  public showNextBtn: boolean;
  private currentRoute: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<{ navigation: boolean }>
  ) {}

  ngOnInit() {
    this.currentRoute = window.location.pathname;
    this.showPrevNextBtn();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentRoute = event.url;
        this.showPrevNextBtn();
        this.store.dispatch(updateNavState({ navigation: true }));
      }
    });
  }

  private showPrevNextBtn() {
    this.showBackBtn =
      this.currentRoute !== this.taxChildRoutes[0] &&
      this.taxChildRoutes.includes(this.currentRoute);
    this.showNextBtn =
      this.currentRoute !==
        this.taxChildRoutes[this.taxChildRoutes.length - 1] &&
      this.taxChildRoutes.includes(this.currentRoute);
  }

  public navigateTo(navType: string) {
    const currentRouteInd =
      navType === "next" ? this.findRouteIndex + 1 : this.findRouteIndex - 1;
    const url = this.taxChildRoutes[currentRouteInd];
    this.router.navigateByUrl(url);
  }

  private get findRouteIndex() {
    return this.taxChildRoutes.findIndex(
      (route) => route === this.currentRoute
    );
  }
}
