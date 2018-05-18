import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrackObjectFull } from 'spotify_api';
import { LayoutService } from '../core/services/layout.service';
import { DJRequestStoreService } from '../core/services/store/dj-request-store.service';
import { SpotifyStoreService } from '../core/services/store/spotify-store.service';

@Component( {
	selector: 'hyper-djrequest',
	templateUrl: './djrequest.component.html',
	styleUrls: [ './djrequest.component.scss' ]
} )
export class DJRequestComponent {

	constructor(
		private layoutService: LayoutService,
		public spotifyStoreService: SpotifyStoreService,
		private djrequestStoreService: DJRequestStoreService,
		private router: Router
	) {
		this.layoutService.setTitle( 'Search Songs' );
	}

	lookupTerm( term ) {
		//this.spotifyStoreService.cancelSearch();
		this.spotifyStoreService.searchTracks( term );
	}

	selectTrack( track: TrackObjectFull ) {
		this.djrequestStoreService.setSelectedTrack( track );
		this.router.navigate( [ 'request', 'new' ] );
	}

}
