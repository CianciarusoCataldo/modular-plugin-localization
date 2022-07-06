import { i18nSettings } from "../types";

/**
 * `localization` plugin slice initial state (default configuration)
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine/#configuration
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
const i18nDefaultSettings: i18nSettings = {
  debug: false,
  fallbackLanguage: "en",
  supportedLanguages: ["en"],
  defaultNamespace: "",
  loadPath: "/locales/{{lng}}/{{ns}}.json",
  namespaces: [],
  titlesNamespace: null,
};

export default i18nDefaultSettings;
