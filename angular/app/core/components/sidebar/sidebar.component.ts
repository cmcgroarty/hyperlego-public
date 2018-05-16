import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { LayoutService } from '../../services/layout.service';

@Component( {
	selector: 'hyper-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: [ './sidebar.component.scss' ]
} )
export class SidebarComponent implements OnInit {
	@ViewChild( 'sidenav' ) sidenav: MatSidenav;
	@ViewChild( 'scrollContainer' ) private scrollContainer: ElementRef;


	constructor(
		public layoutService: LayoutService,
		private location: Location
	) {
	}

	ngOnInit() {
		this.layoutService.scrollContainer = this.scrollContainer;
	}

	close(): void {
		if ( this.layoutService.isHandset ) {
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
