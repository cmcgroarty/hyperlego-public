import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable( {
	providedIn: 'root'
} )
export class AuthGuard implements CanActivate, CanActivateChild {

	constructor( private router: Router ) {
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
		const canAccess = true;
		if ( !canAccess ) {
			this.redirectToLoginPage();
			return false;
		}
		return true;
	}

	canActivateChild(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
		return this.canActivate( route, state );
	}

	redirectToLoginPage() {
		this.router.navigate( [ '/login' ] );
	}
}
