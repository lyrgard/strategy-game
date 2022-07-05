import {AttackAction} from "./attack-action.model";
import {OtherAction} from "./other-action.model";

export interface Unit {
  name: string;
  movement: number;
  actions: number;
  hp: number;
  defenseDice: number,
  automaticDefense: number,
  attackActions : {cost: number, action: AttackAction}[];
  otherActions : {cost: number, action: OtherAction}[];
}
