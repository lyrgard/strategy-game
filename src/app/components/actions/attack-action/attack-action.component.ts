import {Component, Input} from "@angular/core";
import {AttackAction} from "../../../model/attack-action.model";

@Component({
  selector: 'attack-action',
  templateUrl: './attack-action.component.html',
  styleUrls: ['./attack-action.component.scss']
})
export class AttackActionComponent {

  @Input()
  public attackAction!: AttackAction;

  @Input()
  public actionCost!: number;
}
