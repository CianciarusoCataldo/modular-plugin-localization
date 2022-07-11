import { LocalizationPluginI18nSettings } from "../types";

/**
 * [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) slice initial i18next configuration (default)
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
const i18nDefaultSettings: LocalizationPluginI18nSettings = {
  debug: false,
  fallbackLanguage: "en",
  supportedLanguages: ["en"],
  defaultNamespace: "",
  loadPath: "/locales/{{lng}}/{{ns}}.json",
  namespaces: [],
  titlesNamespace: null,
};

export default i18nDefaultSettings;
