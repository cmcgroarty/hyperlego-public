import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { TrackObjectFull } from 'spotify_api';

@Component( {
	selector: 'hyper-djrequest-item',
	templateUrl: './djrequest-item.component.html',
	styleUrls: [ './djrequest-item.component.scss' ]
} )
export class DjrequestItemComponent implements OnInit {
	@HostBinding( 'class' ) hostClass = 'fit-parent';
	@Input() track: TrackObjectFull;

	constructor() {
	}

	ngOnInit() {
	}

}
