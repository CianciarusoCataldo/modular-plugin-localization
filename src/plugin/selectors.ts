/**
 * @file [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) selectors file
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

import { ModularEngineGlobalState } from "modular-engine-types";

import { createModularSelector } from "modular-engine-tools";

import { LocalizationPluginState } from "./types";
import i18nDefaultSettings from "./i18n/default-settings";
import localizationInitialState from "./initial-state";

/**
 * Returns [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) slice,
 * or the default slice state if the plugin is not enabled
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
export const getLocalizationConfig = (
  state: ModularEngineGlobalState<{ localization?: LocalizationPluginState }>
): LocalizationPluginState =>
  state.localization || { ...localizationInitialState, ...i18nDefaultSettings };

/**
 * Returns actual [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) [i18next](https://www.i18next.com/) language
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
 */
export const getLanguage = createModularSelector(
  getLocalizationConfig,
  (localization) => localization.language
);

/**
 * Returns [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) i18next supported languages
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
 */
export const getLanguages = createModularSelector(
  getLocalizationConfig,
  ({ supportedLanguages }) => supportedLanguages
);
