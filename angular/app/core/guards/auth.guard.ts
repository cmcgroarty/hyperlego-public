import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanActivateChild,
	CanLoad,
	Route,
	Router,
	RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable( {
	providedIn: 'root'
} )
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

	constructor( private router: Router, private authService: AuthService ) {
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
		const canAccess = this.authService.isAuthenticated();
		if ( !canAccess ) {
			this.redirectToLoginPage( state );
			return false;
		}
		return true;
	}

	canActivateChild(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
		return this.canActivate( route, state );
	}

	canLoad( route: Route ): Observable<boolean> | Promise<boolean> | boolean {
		const canAccess = false;
		if ( !canAccess ) {
			return false;
		}
		return true;
	}

	redirectToLoginPage( state: RouterStateSnapshot ) {
		this.router.navigate( [ 'login' ], {
			queryParams: {
				return: state.url
			}
		} );
	}
}
