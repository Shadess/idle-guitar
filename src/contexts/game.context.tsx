import React, { createContext } from "react";
import { PassivSkillChoice } from "src/models/kits/typings";

export interface IFrameRate {
  amalgamation: React.MutableRefObject<number>;
  count: React.MutableRefObject<number>;
  fps: [number, React.Dispatch<React.SetStateAction<number>>];
}

export interface IGameState {
  kitId: React.MutableRefObject<number>;
  money: [number, React.Dispatch<React.SetStateAction<number>>];
  passiveSkillProgress: React.MutableRefObject<number>;
  passiveSkillProgressDisplay: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ];
  passiveSkillTrainSelection: React.MutableRefObject<PassivSkillChoice | null>;
  showSaveMessage: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  skills: IPassiveSkills;
}

export interface IPassiveSkills {
  handSynchronization: [number, React.Dispatch<React.SetStateAction<number>>];
  dexterity: [number, React.Dispatch<React.SetStateAction<number>>];
  earTraining: [number, React.Dispatch<React.SetStateAction<number>>];
  musicalTaste: [number, React.Dispatch<React.SetStateAction<number>>];
  calluses: [number, React.Dispatch<React.SetStateAction<number>>];
}

export interface IGameContext {
  accumulatedLag: React.MutableRefObject<number>;
  frameRate: IFrameRate;
  lastSaveTime: React.MutableRefObject<number>;
  lastTime: React.MutableRefObject<number | null>;
  totalTime: React.MutableRefObject<number>;
  state: IGameState;
}

const initialState: IGameContext = {
  accumulatedLag: { current: 0 },
  frameRate: {
    amalgamation: { current: 0 },
    count: { current: 0 },
    fps: [0, () => {}],
  },
  lastSaveTime: { current: 0 },
  lastTime: { current: null },
  state: {
    kitId: { current: 1 },
    money: [0, () => {}],
    passiveSkillProgress: { current: 0 },
    passiveSkillProgressDisplay: [0, () => {}],
    passiveSkillTrainSelection: { current: null },
    showSaveMessage: [false, () => {}],
    skills: {
      handSynchronization: [0, () => {}],
      dexterity: [0, () => {}],
      earTraining: [0, () => {}],
      musicalTaste: [0, () => {}],
      calluses: [0, () => {}],
    },
  },
  totalTime: { current: 0 },
};

const GameContext = createContext<IGameContext>(initialState);

export { GameContext };
