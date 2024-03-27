import { PropsWithChildren, useRef, useState } from "react";
import { GameContext, IGameContext } from "./contexts/game.context";
import { PassivSkillChoice } from "./models/kits/typings";

function GameProvider({ children }: PropsWithChildren) {
  // Non display variables should be references
  const initialState: IGameContext = {
    accumulatedLag: useRef<number>(0),
    frameRate: {
      amalgamation: useRef<number>(0),
      count: useRef<number>(0),
      fps: useState<number>(0),
    },
    lastSaveTime: useRef<number>(0),
    lastTime: useRef<number | null>(null),
    state: {
      kitId: useRef<number>(1),
      money: useState<number>(0),
      passiveSkillProgress: useRef<number>(0),
      passiveSkillProgressDisplay: useState<number>(0),
      passiveSkillTrainSelection: useRef<PassivSkillChoice | null>(null),
      showSaveMessage: useState<boolean>(false),
      skills: {
        handSynchronization: useState<number>(0),
        dexterity: useState<number>(0),
        earTraining: useState<number>(0),
        musicalTaste: useState<number>(0),
        calluses: useState<number>(0),
      },
    },
    totalTime: useRef<number>(0),
  };

  return (
    <GameContext.Provider value={initialState}>{children}</GameContext.Provider>
  );
}

export default GameProvider;
