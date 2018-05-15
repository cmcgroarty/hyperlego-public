import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Subject } from 'rxjs/index';
import { takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../services/layout.service';

@Component( {
	selector: 'hyper-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: [ './sidebar.component.scss' ]
} )
export class SidebarComponent implements OnInit, OnDestroy {
	LOGO = require( '../../../../../assets/images/Logo_2015.svg' );
	isHandset: boolean;
	@ViewChild( 'sidenav' ) sidenav: MatSidenav;
	@ViewChild( 'scrollContainer' ) private scrollContainer: ElementRef;
	private unsubscribe$ = new Subject<void>();


	constructor(
		private breakpointObserver: BreakpointObserver,
		public layoutService: LayoutService,
		private location: Location
	) {
	}

	ngOnInit() {
		this.layoutService.scrollContainer = this.scrollContainer;
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
