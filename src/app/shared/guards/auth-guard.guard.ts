import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  /* ATTRIBUTES */

  isLogin = false;
  isGSAAdmin = false;

  /* CONSTRUCTOR */

  /**
   * constructor
   * @param authService
   * @param router
   */
  constructor(
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let url: string = state.url;
    return this.checkLogin(url);
  
  }


    /**
   * check if use is logged in
   * @param url
   */
  checkLogin(url: string): boolean {
    if (this.isLogin) {
        return true;
    } else {
      //  this.authService.checkToken().subscribe(
      //   data => {
      //     this.isLogin = data.isLogin;
      //     if (data.isLogin) {
      //       this.router.navigate([url]);
      //       return true;
      //     } else {
      //       this.router.navigate(['/auth']);
      //     }
      //   })

      this.router.navigate(['/auth'])
    }
  }
}
