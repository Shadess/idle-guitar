import { useContext } from "react";
import { GameContext } from "../contexts/game.context";
import { MONEY_PER_MILLISECOND } from "./constants";
import useGameSaver from "./game.saver";
import useUpdatePassives from "./update.passives";

const useGameLooper = () => {
  const { saveGame } = useGameSaver();
  const gameContext = useContext(GameContext);
  const { updatePassives } = useUpdatePassives();

  const setMoney = gameContext.state.money[1];

  const runGameLoop = (deltaTime: number) => {
    setMoney((prev) => prev + MONEY_PER_MILLISECOND * deltaTime);
    updatePassives(deltaTime);

    saveGame();
  };

  return {
    runGameLoop,
  };
};

export default useGameLooper;
