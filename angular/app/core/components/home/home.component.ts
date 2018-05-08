import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
} )
export class HomeComponent implements OnInit {

	constructor( private layout: LayoutService ) {
	}

	ngOnInit() {
		this.layout.setTitle( '' );
	}

}
