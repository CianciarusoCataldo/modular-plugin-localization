/**
 * @file `localization` plugins actions
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { createModularAction } from "modular-utils";

/**
 * Change i18next localization language
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const changeLanguage = createModularAction<{ language: string }>(
  "@@localization/LANGUAGE_CHANGE",
  (language) => ({
    language,
  })
);
