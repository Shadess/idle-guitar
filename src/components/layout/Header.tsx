import { useContext } from "react";
import { GameContext } from "../../contexts/game.context";

function Header() {
  const gameContext = useContext(GameContext);

  const fps = gameContext.frameRate.fps[0];

  return (
    <div className="bg-slate-800 flex flex-col items-center justify-center py-2 text-white">
      <h1 className="font-bold text-4xl tracking-wide">Stairway to Glory</h1>
      <div className="flex justify-end text-xs w-96">FPS: {fps.toFixed(0)}</div>
    </div>
  );
}

export default Header;
