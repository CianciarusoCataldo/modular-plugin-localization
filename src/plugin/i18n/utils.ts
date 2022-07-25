/**
 * @file [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) internal utils functions file
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

import i18nInstance from "./instance";

import { initReactI18next, TFunction } from "react-i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

import { LocalizationPluginI18nSettings } from "../types";
import i18nDefaultSettings from "./default-settings";

/**
 * Change actual [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) [i18next](https://www.i18next.com) 
 * instance language, and update page title accordingly (if this feature is enabled)
 *
 * @param {string} language language to set
 * @param {(t: TFunction) => any} callBack functions called at the end of the init process. It takes as argument the t function ready to be used
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-localization
 *
 * @see https://www.i18next.com/overview/api#changelanguage
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine
 *
 * @see https://www.i18next.com/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const setI18nLanguage = ({
  language,
  callback,
}: {
  language: string;
  callback?: (t: TFunction) => any;
}) =>
  i18nInstance.changeLanguage(language).then((t) => callback && callback(t));

/**
 * Init internal [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) [i18next](https://www.i18next.com) 
 * system, using Config object parameters
 *
 * @param {LocalizationPluginI18nSettings} config
 * @param {(t: TFunction) => any} callBack
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-localization
 * @see https://github.com/CianciarusoCataldo/modular-engine
 * @see https://www.i18next.com/overview/configuration-options
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const initi18n = (
  config: LocalizationPluginI18nSettings,
  callBack?: (t: TFunction) => any
) => {
  const i18nConfig: LocalizationPluginI18nSettings =
    config || i18nDefaultSettings;

  let usedNamespaces = i18nConfig.namespaces || [];

  if (i18nConfig.titlesNamespace) {
    usedNamespaces.push(i18nConfig.titlesNamespace);
  }

  return i18nInstance
    .use(initReactI18next)
    .use(ChainedBackend)
    .init({
      fallbackLng: i18nConfig.fallbackLanguage,
      supportedLngs: i18nConfig.supportedLanguages,
      lng: i18nConfig.language,
      preload: [i18nConfig.fallbackLanguage],
      debug: i18nConfig.debug || false,
      backend: {
        backends: [LocalStorageBackend, HttpBackend],
        backendOptions: [
          {
            expirationTime:
              process.env.NODE_ENV === "production"
                ? 7 * 24 * 60 * 60 * 1000 // 7 days
                : 0,
          },
          {
            loadPath: i18nConfig.loadPath,
          },
        ],
      },
      ns: usedNamespaces,
      defaultNS: i18nConfig.defaultNamespace,
      interpolation: {
        escapeValue: false,
      },
      react: { useSuspense: true },
    })
    .then((t) => {
      callBack && callBack(t);
    });
};
