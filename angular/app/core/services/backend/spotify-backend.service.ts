import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TrackObjectFull } from 'spotify_api';
import { APIService } from '../api.service';

@Injectable( {
	providedIn: 'root'
} )
export class SpotifyBackendService {

	constructor( private http: HttpClient, private api: APIService ) {
	}

	searchTracks( term: string ): Observable<TrackObjectFull[]> {
		return this.http.get<TrackObjectFull[]>( this.api.url + '/spotify/track', { params: { term: term } } );
	}
}
