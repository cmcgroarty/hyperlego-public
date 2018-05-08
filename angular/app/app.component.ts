import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenavContent } from '@angular/material';
import { Observable } from 'rxjs';
import { LayoutService } from './core/services/layout.service';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ],
	encapsulation: ViewEncapsulation.None
} )
export class AppComponent implements OnInit {
	@ViewChild( MatSidenavContent, { read: ElementRef } )
	public sidenavContainer: ElementRef;
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe( Breakpoints.Handset );

	constructor( private layout: LayoutService, private breakpointObserver: BreakpointObserver ) {
	}

	ngOnInit() {
		this.layout.sidenavContainer = this.sidenavContainer;
	}
}
