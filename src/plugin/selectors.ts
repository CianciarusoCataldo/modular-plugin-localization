import { ModularEngineGlobalState } from "modular-engine-types";

import { createModularSelector } from "modular-utils";

import { LocalizationState } from "./types";
import i18nDefaultSettings from "./i18n/default-settings";
import localizationInitialState from "./initial-state";

/**
 * Returns `localization` plugin slice, or the default slice state if the plugin is not enabled
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export const getLocalizationConfig = (
  state: ModularEngineGlobalState<{ localization?: LocalizationState }>
): LocalizationState =>
  state.localization || { ...localizationInitialState, ...i18nDefaultSettings };

/**
 * Returns actual i18next language
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
 * Returns i18next supported languages
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const getLanguages = createModularSelector(
  getLocalizationConfig,
  ({ supportedLanguages }) => supportedLanguages
);
