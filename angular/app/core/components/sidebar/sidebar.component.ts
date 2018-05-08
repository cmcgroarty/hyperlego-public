import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable, Subject } from 'rxjs/index';
import { combineLatest, takeUntil } from 'rxjs/operators';

@Component( {
	selector: 'hyper-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: [ './sidebar.component.scss' ]
} )
export class SidebarComponent implements OnInit, OnDestroy {

	LOGO = require( './Logo_2015.svg' );
	isHandset: boolean;
	@ViewChild( 'sidenav' ) sidenav: MatSidenav;
	private unsubscribe$ = new Subject<void>();


	constructor( private breakpointObserver: BreakpointObserver ) {
	}

	ngOnInit() {
		this.breakpointObserver.observe( [
			Breakpoints.Handset,
			Breakpoints.TabletPortrait,
			Breakpoints.WebPortrait
		] ).pipe( takeUntil( this.unsubscribe$ ) )
			.subscribe( breakpoint => {
			this.isHandset = breakpoint.matches;
		} );
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	close(): void {
		if ( this.isHandset ) {
			this.sidenav.close();
		}
	}


}
