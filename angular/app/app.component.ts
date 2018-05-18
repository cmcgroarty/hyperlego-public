import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { SailsSocketService } from './core/services/sails-socket.service';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
} )
export class AppComponent implements OnInit {

	constructor( private sailsSocketService: SailsSocketService, private authService: AuthService ) {
	}

	ngOnInit() {
	}
}
