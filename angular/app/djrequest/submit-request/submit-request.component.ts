import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Subject } from 'rxjs/index';
import { takeUntil } from 'rxjs/operators';
import { TrackObjectFull } from 'spotify_api';
import { environment } from '../../../environments/environment';
import { DJRequestBackendService } from '../../core/services/backend/dj-request-backend.service';
import { LayoutService } from '../../core/services/layout.service';
import { DJRequestStoreService } from '../../core/services/store/dj-request-store.service';
import { explicitTrackValidator } from './explicit-validator.directive';

@Component( {
	selector: 'hyper-submit-request',
	templateUrl: './submit-request.component.html',
	styleUrls: [ './submit-request.component.scss' ]
} )
export class SubmitRequestComponent implements OnInit, OnDestroy {

	public selectedTrack: TrackObjectFull;
	public name = new FormControl( '', [ Validators.required, explicitTrackValidator( () => this.selectedTrack ) ] );
	private unsubscribe$ = new Subject<void>();

	constructor(
		private layoutService: LayoutService,
		private djrequestStoreService: DJRequestStoreService,
		private djrequestBackendService: DJRequestBackendService,
		private snackBar: MatSnackBar,
		private router: Router,
		private cookieService: CookieService
	) {
	}

	ngOnInit() {
		this.layoutService.backButton = true;
		this.layoutService.setTitle( 'Request Song' );
		this.djrequestStoreService.selectedTrack$.pipe( takeUntil( this.unsubscribe$ ) ).subscribe( track => {
			this.selectedTrack = track;
			if ( this.selectedTrack.explicit ) {
				this.name.markAsTouched();

			}
		} );
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	submitRequest() {
		const uuidCookie = this.cookieService.get( environment.cookie.djrequest.key );
		this.djrequestBackendService.createRequest( {
			track: this.selectedTrack,
			requester: this.name.value,
			spotify: this.selectedTrack.id,
			uuid: ( uuidCookie ? uuidCookie : null )
		} ).subscribe( ( request ) => {
			this.cookieService.put( environment.cookie.djrequest.key, request.uuid );
			this.snackBar.open( 'Request Submitted to the DJ' );
			this.djrequestStoreService.setSelectedTrack( undefined );
			this.router.navigate( [ 'request' ] );

		}, ( error ) => {
			console.log( error );
			this.snackBar.open( 'Error: Chris will add descriptive messages later' );
		} );
	}

}
