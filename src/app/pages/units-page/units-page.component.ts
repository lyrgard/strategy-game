import {Component} from "@angular/core";
import {Unit} from "../../model/unit.model";
import {AttackAction, TargetingType} from "../../model/attack-action.model";
import {OtherAction} from "../../model/other-action.model";

const attackActions: {[key:string]: AttackAction} = {
  "mitraillette": {
    name: "Mitraillette",
    condition: "",
    minRange: 1,
    maxRange: 3,
    attackDie: 2,
    automaticSkulls: 0,
    targetingType: <TargetingType>'targeted',
  },
  "mitrailleuse": {
    name: "Mitrailleuse",
    condition: "",
    minRange: 1,
    maxRange: 3,
    attackDie: 3,
    automaticSkulls: 0,
    targetingType: <TargetingType>'targeted',
  },
  "mortier": {
    name: "Mortier",
    condition: "",
    minRange: 2,
    maxRange: 5,
    attackDie: 1,
    automaticSkulls: 2,
    targetingType: <TargetingType>'random',
  },
  "canon": {
    name: "Canon",
    condition: "",
    minRange: 1,
    maxRange: 3,
    attackDie: 4,
    automaticSkulls: 1,
    targetingType: <TargetingType>'targeted',
  },
  "knife": {
    name: "Couteau",
    condition: "",
    minRange: 0,
    maxRange: 0,
    attackDie: 2,
    automaticSkulls: 0,
    targetingType: <TargetingType>'sniper',
  },
  "lames": {
    name: "Lames",
    condition: "",
    minRange: 0,
    maxRange: 0,
    attackDie: 3,
    automaticSkulls: 0,
    targetingType: <TargetingType>'sniper',
  }
};

const otherActions: {[key:string]: OtherAction} = {
  "forcedMarch": {
    name: "Marche forcée",
    condition: "1x par tour max. Impossible si l'unité est engagée au corps à corps",
    description: "Déplacer l'unité d'un hexagone",
  },
  "percée": {
    name: "Percée",
    condition: "1x par tour max. Utilisable uniquement si un haxagone adjacent contient une unité adverse et a assez d'emplacement pour accomoder cette unité",
    description: "Se déplacer sur l'hexagone adjacent, et utiliser gratuitement une action d'attaque",
  }
};

const units: Unit[] = [
  {
    name: "Infanterie légère",
    movement: 3,
    hp: 1,
    defenseDice: 2,
    automaticDefense: 0,
    actions: 2,
    attackActions: [
      {
        action: attackActions['mitraillette'],
        cost: 1,
      },
      {
        action: attackActions['knife'],
        cost: 1,
      }
    ],
    otherActions: [
      {
        action: otherActions['forcedMarch'],
        cost: 1,
      }
    ]
  }, {
    name: "Infanterie avec mortier",
    movement: 2,
    hp: 1,
    defenseDice: 3,
    automaticDefense: 0,
    actions: 2,
    attackActions: [
      {
        action: attackActions['mortier'],
        cost: 2,
      },
      {
        action: attackActions['knife'],
        cost: 1,
      }
    ],
    otherActions: [
      {
        action: otherActions['forcedMarch'],
        cost: 1,
      }
    ]
  }, {
    name: "Véhicule léger d'assault",
    movement: 4,
    hp: 2,
    defenseDice: 3,
    automaticDefense: 0,
    actions: 2,
    attackActions: [
      {
        action: attackActions['mitrailleuse'],
        cost: 1,
      },
      {
        action: attackActions['lames'],
        cost: 1,
      }
    ],
    otherActions: [
      {
        action: otherActions['percée'],
        cost: 0,
      }
    ]
  }, {
    name: "Tank",
    movement: 3,
    hp: 4,
    defenseDice: 2,
    automaticDefense: 1,
    actions: 3,
    attackActions: [
      {
        action: attackActions['mitrailleuse'],
        cost: 1,
      },
      {
        action: attackActions['canon'],
        cost: 3,
      }
    ],
    otherActions: [
    ]
  },
];

@Component({
  selector: 'units-page',
  templateUrl: './units-page.component.html',
  styleUrls: ['./units-page.component.scss']
})
export class UnitsPageComponent {

  public units = units;
}
