import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {LocalStorageService} from "../services/localStorage.service";
import {AuthRoutesNames} from "../../auth/auth.routes.names";
import {appRoutesNames} from "../../app.routes.names";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private storage: LocalStorageService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const authToken = this.storage.getValue('authToken');
    return authToken || this.router.navigateByUrl(`${appRoutesNames.AUTH}/${AuthRoutesNames.LOGIN}`);
  }
}
