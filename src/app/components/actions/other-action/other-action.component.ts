import {Component, Input} from "@angular/core";
import {OtherAction} from "../../../model/other-action.model";

@Component({
  selector: 'other-action',
  templateUrl: './other-action.component.html',
  styleUrls: ['./other-action.component.scss']
})
export class OtherActionComponent {

  @Input()
  public otherAction!: OtherAction;

  @Input()
  public actionCost!: number;
}
