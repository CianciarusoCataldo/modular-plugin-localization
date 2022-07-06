/**
 * @file `localization` plugin initial state file
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import i18nDefaultSettings from "./i18n/default-settings";
import { LocalizationState } from "./types";

const initialState: LocalizationState = {
  language: "",
  ...i18nDefaultSettings,
};

export default initialState;
