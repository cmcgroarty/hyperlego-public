import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component( {
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: [ './sidebar.component.scss' ]
} )
export class SidebarComponent implements OnInit {

	LOGO = require( './Logo_2015.svg' );
	@Output() closeSidenav = new EventEmitter<boolean>();

	constructor( private breakpointObserver: BreakpointObserver ) {
	}

	ngOnInit() {
	}


}
