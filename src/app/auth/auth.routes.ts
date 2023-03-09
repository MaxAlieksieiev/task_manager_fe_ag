import {AuthRoutesNames} from "./auth.routes.names";
import {LOGIN_PAGE_ROUTES} from "./login-page/login-page.routes";
import {REGISTRATION_PAGE_ROUTES} from "./registration-page/registration-page.route";

export const AUTH_ROUTES = [
  {path: AuthRoutesNames.LOGIN, children: LOGIN_PAGE_ROUTES},
  {path: AuthRoutesNames.REGISTRATION, children: REGISTRATION_PAGE_ROUTES}
];
