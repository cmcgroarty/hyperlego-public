import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SailsService } from 'angular2-sails';
import { SnackSpinnerComponent } from '../../shared/components/snack-spinner/snack-spinner.component';

@Injectable( {
	providedIn: 'root'
} )
export class SailsSocketService {

	public subscribed = false;
	private reconnectingSnack;

	constructor( private sailsService: SailsService, private snackBar: MatSnackBar ) {
		this.sailsService.connect( {
			url: 'http://d.idesignconsulting.com:1337',
			transports: [ 'websocket' ],
			autoConnect: false,
			reconnection: true
		} );

		this.subscribe();
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
