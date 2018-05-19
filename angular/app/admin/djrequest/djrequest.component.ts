import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../core/services/layout.service';
import { DJRequestStoreService } from '../../core/services/store/dj-request-store.service';

@Component( {
	selector: 'hyper-djrequest',
	templateUrl: './djrequest.component.html',
	styleUrls: [ './djrequest.component.scss' ]
} )
export class DjrequestComponent implements OnInit {
	public tracks$;

	constructor( private djrequestStoreService: DJRequestStoreService, private layoutService: LayoutService ) {
		this.layoutService.setTitle( 'DJ Requests' );
		this.djrequestStoreService.loadInitialData();
	}

	ngOnInit() {
		this.tracks$ = this.djrequestStoreService.requests$;
	}

}
