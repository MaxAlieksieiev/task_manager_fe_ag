import { AUTH_ROUTES} from "./auth/auth.routes";
import { appRoutesNames } from "./app.routes.names"
import {USER_ROUTES} from "./user/user.routes";
import {AuthGuard} from "./core/guards/auth.guard";

export const APP_ROUTES = [
  {path: appRoutesNames.AUTH, children: AUTH_ROUTES},
  {path: appRoutesNames.USER, children: USER_ROUTES, canActivate: [AuthGuard]}
]
