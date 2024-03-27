import { useContext } from "react";
import { GameContext } from "../contexts/game.context";

const useFrameRate = () => {
  const gameContext = useContext(GameContext);

  const setFps = gameContext.frameRate.fps[1];

  const calcFrameRate = (deltaTime: number) => {
    if (deltaTime <= 0) return; // otherwise we get stuck with infinity

    const tickFps = 1000 / deltaTime;

    if (
      gameContext.frameRate.count.current === 0 ||
      gameContext.frameRate.count.current >= 10000
    ) {
      // this will reset our FPS calc so we don't get into YUGE number calculations that I don't want to deal with
      gameContext.frameRate.count.current = 1;
      gameContext.frameRate.amalgamation.current = tickFps;
      setFps(tickFps);
    } else {
      const totalCount = gameContext.frameRate.count.current + 1;
      // Rolling average calculation
      gameContext.frameRate.amalgamation.current =
        (gameContext.frameRate.amalgamation.current * (totalCount - 1)) /
          totalCount +
        tickFps / totalCount;
      setFps(gameContext.frameRate.amalgamation.current);
      gameContext.frameRate.count.current = totalCount;
    }
  };

  return {
    calcFrameRate,
  };
};

export default useFrameRate;
