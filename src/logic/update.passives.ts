import { useContext } from "react";
import { GameContext } from "src/contexts/game.context";
import { allKits } from "src/models/kits/constants";
import { IKit, PassivSkillChoice } from "src/models/kits/typings";

const getPassiveModifier = (
  passiveSkill: PassivSkillChoice,
  kit: IKit
): number => {
  let skillModifier = 0;
  switch (passiveSkill as PassivSkillChoice) {
    case PassivSkillChoice.calluses:
      skillModifier = kit.skillModifiers.calluses;
      break;
    case PassivSkillChoice.dexterity:
      skillModifier = kit.skillModifiers.dexterity;
      break;
    case PassivSkillChoice.earTraining:
      skillModifier = kit.skillModifiers.earTraining;
      break;
    case PassivSkillChoice.musicalTaste:
      skillModifier = kit.skillModifiers.musicalTaste;
      break;
    default:
      skillModifier = kit.skillModifiers.handSynchronization;
  }
  return skillModifier;
};

const useUpdatePassives = () => {
  const gameContext = useContext(GameContext);

  const [, setPassiveSkillProgress] =
    gameContext.state.passiveSkillProgressDisplay;

  const [, updateCalluses] = gameContext.state.skills.calluses;
  const [, updateDex] = gameContext.state.skills.dexterity;
  const [, updateEarTraining] = gameContext.state.skills.earTraining;
  const [, updateHandSync] = gameContext.state.skills.handSynchronization;
  const [, updateTastes] = gameContext.state.skills.musicalTaste;

  const updatePassives = (deltaTime: number) => {
    if (gameContext.state.passiveSkillTrainSelection.current === null) return;

    const kit = allKits[gameContext.state.kitId.current];
    const passiveSkill = gameContext.state.passiveSkillTrainSelection.current;
    const passiveProgress = gameContext.state.passiveSkillProgress.current;

    const skillModifier = getPassiveModifier(
      passiveSkill as PassivSkillChoice,
      kit
    );

    if (passiveProgress >= 100) {
      if (passiveSkill === PassivSkillChoice.handSynchronization) {
        updateHandSync((prev) => prev + 1);
      } else if (passiveSkill === PassivSkillChoice.dexterity) {
        updateDex((prev) => prev + 1);
      } else if (passiveSkill === PassivSkillChoice.earTraining) {
        updateEarTraining((prev) => prev + 1);
      } else if (passiveSkill === PassivSkillChoice.calluses) {
        updateCalluses((prev) => prev + 1);
      } else if (passiveSkill === PassivSkillChoice.musicalTaste) {
        updateTastes((prev) => prev + 1);
      }
    }

    const newProgress =
      passiveProgress < 100 ? passiveProgress + skillModifier * deltaTime : 0;

    setPassiveSkillProgress(newProgress);
    gameContext.state.passiveSkillProgress.current = newProgress;
  };

  return {
    updatePassives,
  };
};

export default useUpdatePassives;
