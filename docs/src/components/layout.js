import { home } from "./home";
import { explore } from "./explore";
import { messenger } from "./messenger";
import { login } from './login'
import { Ereror } from './eeror'
import { profile } from "./profile";
let path = window.location.pathname;
export const layout = () => {

  switch (path) {
    case "/":
      return login();
      break;
    case "/home":
      return home()
      break;
    case "/messenger":
      return messenger();
      break;
    case "/explore":
      return explore();
      break;
    case "/profile":
      return profile();
      break;
    default:
      return Ereror();

  }

};



