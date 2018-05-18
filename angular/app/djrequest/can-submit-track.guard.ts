import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DJRequestStoreService } from '../core/services/store/dj-request-store.service';

@Injectable( {
	providedIn: 'root'
} )
export class CanSubmitTrackGuard implements CanActivate {
	constructor( private router: Router, private djrequestStoreService: DJRequestStoreService ) {
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
		if ( !this.djrequestStoreService.hasSelectedTrack() ) {
			this.router.navigate( [ 'request' ] );
			return false;
		}
		return true;
	}
}
