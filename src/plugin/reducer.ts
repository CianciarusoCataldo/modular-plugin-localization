/**
 * @file `localization` plugin reducer file
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModularEngineEffects } from "modular-engine-types";

import { LocalizationPluginState } from "./types";

import { changeLanguage } from "./actions";

/**
 * `localization` plugin reducer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
const localizationReducer: ModularEngineEffects<LocalizationPluginState> = {
  [changeLanguage.type]: (state, action) => ({
    ...state,
    language: action.payload.language,
  }),
};

export default localizationReducer;
