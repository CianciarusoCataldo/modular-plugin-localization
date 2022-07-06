export { default as localizationPlugin } from "./plugin";

export { changeLanguage } from "./plugin/actions";

export {
  getLocalizationConfig,
  getLanguage,
  getLanguages,
} from "./plugin/selectors";
