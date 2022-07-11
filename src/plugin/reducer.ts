/**
 * @file [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) reducer file
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-localization
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine
 *
 * @see https://www.i18next.com/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */

import { ModularEngineEffects } from "modular-engine-types";

import { LocalizationPluginState } from "./types";

import { changeLanguage } from "./actions";

/**
 * [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) reducer
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
