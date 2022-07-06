/**
 * @file `localization` plugin helper functions
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { TFunction } from "react-i18next";

/**
 * Update app page title (currently displayed on browser tab) depending on actual route
 *
 * @param {Config} CONFIG config object
 * @param {TFunction} translation function
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export const updateTitle = ({
  routeKey,
  appName,
  ns,
  tFunction,
}: {
  routeKey?: string;
  ns?: string;
  appName?: string;
  tFunction: TFunction;
}) => {
  let name = appName ? appName.trim() : null;

  let title = routeKey && ns ? tFunction(routeKey, { ns }).trim() : "";

  const pageTitle = `${name || ""} ${name && title ? "-" : ""} ${title || ""}`;

  if (pageTitle !== window.document.title) {
    window.document.title = pageTitle;
  }
};
