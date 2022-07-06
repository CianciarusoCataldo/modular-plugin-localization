/**
 * @file `localization` plugin reducer file
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModularEngineEffects } from "modular-engine-types";

import { LocalizationState } from "./types";

import { changeLanguage } from "./actions";

/**
 * `localization` plugin reducer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
const localizationReducer: ModularEngineEffects<LocalizationState> = {
  [changeLanguage.type]: (state, action) => ({
    ...state,
    language: action.payload.language,
  }),
};

export default localizationReducer;
