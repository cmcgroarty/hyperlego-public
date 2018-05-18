import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { any } from 'codelyzer/util/function';
import { Subject } from 'rxjs/index';
import { takeUntil } from 'rxjs/operators';
import { TrackObjectFull } from 'spotify_api';
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
	public name = new FormControl( '', [ Validators.required, explicitTrackValidator(() => this.selectedTrack) ] );
	private unsubscribe$ = new Subject<void>();

	constructor(
		private layoutService: LayoutService,
		private djrequestStoreService: DJRequestStoreService,
		private djrequestBackendService: DJRequestBackendService
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
		this.djrequestBackendService.createRequest( { track: this.selectedTrack, requester: this.name.value } );
	}

}
