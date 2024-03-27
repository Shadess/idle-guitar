export interface IPassiveSkillModifiers {
  handSynchronization: number;
  dexterity: number;
  earTraining: number;
  musicalTaste: number;
  calluses: number;
}

export interface IKit {
  id: number;
  displayName: string;
  imagePath: string;
  skillModifiers: IPassiveSkillModifiers;
}

export enum PassivSkillChoice {
  handSynchronization,
  dexterity,
  earTraining,
  musicalTaste,
  calluses,
}
