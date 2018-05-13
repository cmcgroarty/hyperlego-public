import { Component, OnInit } from '@angular/core';
import { SailsSocketService } from './core/services/sails-socket.service';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
} )
export class AppComponent implements OnInit {

	constructor(private sailsSocketService: SailsSocketService) {
	}

	ngOnInit() {
	}
}
