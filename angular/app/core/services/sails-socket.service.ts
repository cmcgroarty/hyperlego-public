import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SailsService } from 'angular2-sails';
import { environment } from '../../../environments/environment';
import { SnackSpinnerComponent } from '../../shared/components/snack-spinner/snack-spinner.component';
import { APIService } from './api.service';
import { AuthService } from './auth.service';

@Injectable( {
	providedIn: 'root'
} )
export class SailsSocketService {

	public subscribed = false;
	private reconnectingSnack;

	constructor( private sailsService: SailsService, private api: APIService, private snackBar: MatSnackBar, private authService: AuthService ) {
		this.sailsService.connect( {
			url: this.api.socket,
			transports: [ 'websocket' ],
			reconnection: false,
			environment: ( environment.production ? 'production' : 'development' )
		} );

		this.subscribe();
	}

	public socketErrorHandler( error ) {
		if ( error.statusCode && error.statusCode === 401 ) {
			this.authService.intercept401();
		}
	}

	private subscribe() {
		this.sailsService.on( 'connect' ).subscribe( () => {
			this.subscribed = true;
			this.reconnectingSnack = undefined;
			this.snackBar.open( 'WebSocket Connected' );
		} );
		this.sailsService.on( 'disconnect' ).subscribe( () => {
			this.subscribed = false;
			this.snackBar.open( 'WebSocket Disconnected' );
		} );
		this.sailsService.on( 'reconnecting' ).subscribe( () => {
			if ( this.reconnectingSnack === undefined ) {
				this.reconnectingSnack = this.snackBar.openFromComponent( SnackSpinnerComponent, {
					data: 'WebSocket Reconnecting',
					duration: 0
				} );
			}

		} );
		this.sailsService.on( 'reconnected' ).subscribe( () => {
			this.snackBar.open( 'WebSocket Reconnected' );
		} );
	}
}
