import {Component, Input} from "@angular/core";
import {Unit} from "../../model/unit.model";

@Component({
  selector: 'unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent {

  @Input()
  public unit!: Unit;


}
