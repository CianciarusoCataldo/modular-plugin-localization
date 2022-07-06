/**
 * @file `localization` plugins types definitions
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import {
  ModularEngineCustomState,
  ModularEnginePlugin,
} from "modular-engine-types";

/**
 * `localization` state slice
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export type LocalizationState = ModularEngineCustomState<
  {
    language: string;
  } & i18nSettings
>;

export type LocalizationSettings = {
  i18n?: i18nSettings;
};

export type i18nSettings = ModularEngineCustomState<{
  fallbackLanguage: string;
  supportedLanguages: string[];
  namespaces: string[];
  loadPath: string;
  defaultNamespace: string;
  titlesNamespace: string | null;
}>;

export type LocalizationPlugin = ModularEnginePlugin<LocalizationSettings>;
