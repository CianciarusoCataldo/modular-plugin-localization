/**
 * @file [modular-plugin-localization](https://github.com/CianciarusoCataldo/modular-plugin-localization) init file
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

/** utils */
import { computeValue, fillObject } from "modular-utils";

/** internal  */
import i18nDefaultSettings from "./i18n/default-settings";
import { initi18n, setI18nLanguage } from "./i18n/utils";
import i18nInstance from "./i18n/instance";

import { LocalizationPlugin } from "./types";
import { updateTitle } from "./helper";
import * as actions from "./actions";
import localizationReducer from "./reducer";

/**
 * Improve [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) system with a fully working localization system, with multi-language support, based on [118next](https://www.i18next.com/)
 *
 * @returns `localization` plugin
 *
 * @example <caption> Basic scenario - custom localization settings inside engine.config.js/ts file .</caption>
 *
 * const localizationPlugin = require("modular-plugin-localization");
 *
 * const config = {
 *   appName: "custom-app",
 *   plugins: [localizationPlugin],
 *   localization: {
 *     namespaces: ["custom", "common"],
 *     debug: false,
 *     fallbackLanguage: "en",
 *     supportedLanguages: ["en"],
 *     defaultNamespace: "",
 *     loadPath: "/custom-locales/{{lng}}/{{ns}}.json",
 *     titlesNamespace: "titles",
 *  },
 * };
 *
 * module.exports = { config };
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
const localizationPlugin: LocalizationPlugin = () => {
  const language =
    computeValue(() => navigator.language.split("-")[0], "") || "";

  return {
    feature: "localization",
    redux: (config) => ({
      slice: "localization",
      effects: localizationReducer,
      initialState: {
        ...config.localization,
        language,
      },
    }),
    create: (config) => ({
      field: "localization",
      content: fillObject({
        toFill: config.localization,
        defaultObj: i18nDefaultSettings,
      }),
    }),

    format: (config, enabledPlugins) => {
      let inputConfig = config || {};
      let i18n = inputConfig.localization || i18nDefaultSettings;

      const ns = i18n.titlesNamespace || "";

      let callBack;

      if (enabledPlugins.router) {
        callBack = (t) => {
          updateTitle({
            tFunction: t,
            key: config.router.initialRouteKey,
            ns,
            appName: inputConfig.appName,
          });
        };
      }

      initi18n({ ...i18n, language }, callBack);

      enabledPlugins.router &&
        inputConfig.router.onLocationChange.push((path, routeKey) => {
          updateTitle({
            key: routeKey,
            ns,
            appName: inputConfig.appName,
            tFunction: i18nInstance.t,
          });
        });

      inputConfig.redux?.middlewares?.push((action, store) => {
        const state = store.getState();

        switch (action.type) {
          case actions.changeLanguage.type:
            {
              state.localization.supportedLanguages.includes(
                action.payload.language
              ) &&
                setI18nLanguage({
                  language: action.payload.language,
                  callback: (t) =>
                    enabledPlugins.router &&
                    updateTitle({
                      key: state.router.routeKey,
                      tFunction: t,
                      appName: state.config.appName,
                      ns: state.localization.titlesNamespace,
                    }),
                });
            }
            break;
        }
      });

      if (enabledPlugins.urlChecker) {
        inputConfig.urlChecker.queryParameters["lang"] = ({
          store,
          urlParam,
          config,
        }) => {
          store.dispatch(actions.changeLanguage(urlParam));

          return config;
        };

        config.urlChecker.after.push("lang");
      }

      return inputConfig;
    },
  };
};

export default localizationPlugin;
