import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "SkillItCode";

  constructor(private swUpdate: SwUpdate, private _snackBar: MatSnackBar) {
    this.swUpdate.available.subscribe((event) => {
      console.log(event, "event");
      const snackBarRef = this._snackBar.open("Update Latest Version", "OK");
      snackBarRef.onAction().subscribe(() => {
        window.location.reload();
      });
    });
  }
}
