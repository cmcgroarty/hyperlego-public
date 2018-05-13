import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SailsService } from 'angular2-sails';

@Injectable( {
	providedIn: 'root'
} )
export class SailsSocketService {

	public subscribed = false;

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
			this.snackBar.open('WebSocket Connected', 'OK');
		} );

		this.sailsService.on( 'disconnect' ).subscribe( () => {
			this.subscribed = false;
			this.snackBar.open('WebSocket Disconnected', 'OK');
		} );

		this.sailsService.on('reconnecting').subscribe(() => {
			this.snackBar.open('WebSocket Reconnecting...', 'OK');
		});
		this.sailsService.on('reconnected').subscribe(() => {
			this.snackBar.open('WebSocket Reconnected', 'OK');
		});
	}
}
