import { useContext, useEffect, useRef } from "react";
import { GameContext } from "../contexts/game.context";
import { TIME_STEP } from "./constants";
import useFrameRate from "./frame.rate";

const useAnimateFrame = (callback: (arg0: number) => void) => {
  const animateRef = useRef<number>(0);

  const gameContext = useContext(GameContext);
  const { calcFrameRate } = useFrameRate();

  const animate = (currentTime: DOMHighResTimeStamp) => {
    const theLastTime = gameContext.lastTime.current ?? currentTime;
    const deltaTime = currentTime - theLastTime;
    gameContext.totalTime.current += deltaTime;
    gameContext.accumulatedLag.current += deltaTime;

    calcFrameRate(deltaTime);

    while (gameContext.accumulatedLag.current >= TIME_STEP) {
      gameContext.accumulatedLag.current -= TIME_STEP;
      callback(TIME_STEP);
    }

    gameContext.lastTime.current = currentTime;
    animateRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animateRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animateRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useAnimateFrame;
