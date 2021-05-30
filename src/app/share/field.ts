import { Input } from "@angular/core";
import { FormControl } from "@angular/forms";

export class Field {
  @Input() public placeholder: string;
  @Input() public label: string;
  @Input() public required: boolean;
  @Input() public value: string;
  @Input() public control: FormControl;
}
