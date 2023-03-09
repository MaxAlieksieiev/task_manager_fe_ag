import { AUTH_ROUTES} from "./auth/auth.routes";
import { appRoutesNames } from "./app.routes.names"

export const APP_ROUTES = [
  {path: appRoutesNames.AUTH, children: AUTH_ROUTES}
]
