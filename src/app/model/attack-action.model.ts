export type TargetingType = 'targeted' | 'random' | 'sniper';

export interface AttackAction {
  name: string;
  condition: string;
  minRange: number;
  maxRange: number;
  attackDie: number;
  automaticSkulls: number;
  targetingType: TargetingType;
}
