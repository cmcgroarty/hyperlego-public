import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { TrackObjectFull } from 'spotify_api';
import { SpotifyBackendService } from '../backend/spotify-backend.service';

@Injectable( {
	providedIn: 'root'
} )
export class SpotifyStoreService {

	private _tracks$: BehaviorSubject<TrackObjectFull []> = new BehaviorSubject<TrackObjectFull []>( [] );
	public readonly tracks$ = this._tracks$.asObservable();

	private unsubscribe$ = new Subject<void>();

	constructor( private spotifyBackendService: SpotifyBackendService ) {
		this.loadInitialData();
	}

	searchTracks( term: string ) {
		this.spotifyBackendService.searchTracks( term ).pipe(takeUntil(this.unsubscribe$)).subscribe( tracks => {
			this._tracks$.next( tracks );
		} );
	}

	cancelSearch() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	loadInitialData() {
	}
}
