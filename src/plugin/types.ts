/**
 * @file [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) types definitions
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
 * [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) state slice
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-localization
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export type LocalizationPluginState = ModularEngineCustomState<
  {
    language: string;
  } & LocalizationPluginI18nSettings
>;

export type LocalizationPluginSettings = {
  localization?: LocalizationPluginI18nSettings & {
    onLanguageChange?: ((lang: string) => void)[];
  };
};

/**
 * [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) [i18n](https://www.i18next.com/)
 * settings type definitions
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
export type LocalizationPluginI18nSettings = ModularEngineCustomState<{
  fallbackLanguage: string;
  supportedLanguages: string[];
  namespaces: string[];
  loadPath: string;
  defaultNamespace: string;
  titlesNamespace: string | null;
}>;

/**
 * [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) type definitions
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
export type LocalizationPlugin =
  ModularEnginePlugin<LocalizationPluginSettings>;
