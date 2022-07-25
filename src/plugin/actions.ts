/**
 * @file [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) actions
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

import { createModularEngineAction } from "modular-engine-tools";

/**
 * Change [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) localization language
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
export const changeLanguage = createModularEngineAction<{ language: string }>(
  "@@localization/LANGUAGE_CHANGE",
  (language) => ({
    language,
  })
);
