import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable( {
	providedIn: 'root'
} )
export class AuthGuard implements CanActivate, CanActivateChild {
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
		return true;
	}

	canActivateChild(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
		return this.canActivate( route, state );
	}
}
