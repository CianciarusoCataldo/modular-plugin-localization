/**
 * @file internal I18next utils functions
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import i18nInstance from "./instance";

import { initReactI18next } from "react-i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

import { i18nSettings } from "../types";
import { TFunction } from "i18next";
import i18nDefaultSettings from "./default-settings";

/**
 * Change actual i18next instance language, and update page title accordingly (if this feature is enabled)
 *
 * @param {string} language language to set
 *
 * @see https://www.i18next.com/overview/api#changelanguage
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
 * Init internal i18next system, using Config object parameters
 *
 * @see https://www.i18next.com/overview/configuration-options
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const initi18n = ({
  config,
  callBack,
}: {
  config: i18nSettings;
  callBack?: (t: TFunction) => any;
}) => {
  const i18nConfig: i18nSettings = config || i18nDefaultSettings;
  const titlesNamespace = i18nConfig.titlesNamespace;

  let usedNamespaces = [...i18nConfig.namespaces];

  if (titlesNamespace) {
    usedNamespaces.push(titlesNamespace);
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
      react: { useSuspense: false },
    })
    .then((t) => {
      callBack && callBack(t);
    });
};
