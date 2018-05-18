import { Component, HostBinding, Input } from '@angular/core';
import { TrackObjectFull } from 'spotify_api';

@Component( {
	selector: 'hyper-track-item',
	templateUrl: './track-item.component.html',
	styleUrls: [ './track-item.component.scss' ]
} )
export class TrackItemComponent {
	@HostBinding( 'class' ) hostClass = 'fit-parent';
	@Input() track: TrackObjectFull;

	constructor() {
	}

}
