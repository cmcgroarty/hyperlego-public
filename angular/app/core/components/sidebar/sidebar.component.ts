import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs/index';
import { filter, takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../services/layout.service';

@Component( {
	selector: 'hyper-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: [ './sidebar.component.scss' ]
} )
export class SidebarComponent implements OnInit, OnDestroy {

	LOGO = require( './Logo_2015.svg' );
	isHandset: boolean;
	@ViewChild('sidenavContainer') private sidenavContainer: ElementRef;
	@ViewChild('sidenavContent') private sidenavContent: ElementRef;
	@ViewChild( 'sidenav' ) sidenav: MatSidenav;
	private unsubscribe$ = new Subject<void>();


	constructor(
		private breakpointObserver: BreakpointObserver,
		private layoutService: LayoutService,
		private location: Location,
		private router: Router
	) {
		router.events.pipe( filter( event => event instanceof NavigationStart ) )
			.subscribe( ( event: NavigationStart ) => {
				this.layoutService.backButton = false;
			} );
	}

	ngOnInit() {
		this.layoutService.sidenavContainer = this.sidenavContainer;
		this.layoutService.sidenavContent = this.sidenavContent;
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

	backButton(): boolean {
		return this.layoutService.backButton;
	}

	back(): void {
		this.location.back();
	}
	appTitle(): string {
		return this.layoutService.appTitle();
	}


}
