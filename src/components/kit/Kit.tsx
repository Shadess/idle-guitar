import { Card } from "antd";
import { useContext } from "react";
import { GameContext } from "src/contexts/game.context";
import { allKits } from "src/models/kits/constants";
import { PassivSkillChoice } from "src/models/kits/typings";

function Kit() {
  const gameContext = useContext(GameContext);

  const handSynchronization = gameContext.state.skills.handSynchronization[0];
  const kit = allKits[gameContext.state.kitId.current];
  const skillProgress = gameContext.state.passiveSkillProgressDisplay[0] ?? 0;
  const skillProgressVal = skillProgress + "%";

  return (
    <Card className="p-0">
      <h2 className="m-0 p-0 text-bold uppercase">
        <span className="text-slate-500">Kit</span> {kit.displayName}
      </h2>

      <div className="flex flex-nowrap">
        <img
          src={`src/assets/${kit.imagePath}`}
          alt="personal kit guitar logo"
          className="border-4 border-solid border-slate-200 rounded-lg w-28 h-28 mr-4"
        />

        <div className="flex flex-1 flex-wrap">
          <div>
            <div className="flex flex-col">
              <p className="font-bold m-0 mb-2">Hand Synchronization</p>
              <button
                className="bg-blue-600 font-bold px-2 py-1 self-center text-xs text-white uppercase"
                onClick={() => {
                  if (
                    gameContext.state.passiveSkillTrainSelection.current ===
                    null
                  )
                    gameContext.state.passiveSkillTrainSelection.current =
                      PassivSkillChoice.handSynchronization;
                  else
                    gameContext.state.passiveSkillTrainSelection.current = null;
                }}
              >
                train
              </button>

              <p className="font-bold self-center text-3xl m-0 mt-2">
                {handSynchronization}
              </p>

              <div className="bg-slate-200 h-3 relative">
                <div
                  className="bg-slate-800 h-3"
                  style={{
                    width: skillProgressVal,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Kit;
