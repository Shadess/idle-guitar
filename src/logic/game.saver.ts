import { useContext } from "react";
import { GameContext } from "../contexts/game.context";
import { AUTO_SAVE_PERIOD } from "./constants";

const useGameSaver = () => {
  const gameContext = useContext(GameContext);

  const setShowSaveMessage = gameContext.state.showSaveMessage[1];

  const saveGame = () => {
    if (
      gameContext.totalTime.current - gameContext.lastSaveTime.current >=
      AUTO_SAVE_PERIOD
    ) {
      gameContext.lastSaveTime.current = gameContext.totalTime.current;
      setShowSaveMessage(true);

      setTimeout(() => {
        setShowSaveMessage(false);
      }, 1000);
    }
  };

  return {
    saveGame,
  };
};

export default useGameSaver;
