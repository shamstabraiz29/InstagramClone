import { createElement } from "../react/index";
import "../styles/error.css";

export const Ereror = () => {
  const ErrorIcon = createElement("i", { class: "fa fa-frown" });

  const heading = createElement("h1", null, "404 Error");

  return createElement("div", { class: "error-div" }, ErrorIcon, heading);
};
