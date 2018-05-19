import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TrackObjectFull } from 'spotify_api';
import { DJRequest } from '../../../shared/model/dj-request.model';
import { DJRequestBackendService } from '../backend/dj-request-backend.service';

@Injectable( {
	providedIn: 'root'
} )
export class DJRequestStoreService {


	private _requests$: BehaviorSubject<DJRequest[]> = new BehaviorSubject<DJRequest[]>( [] );
	public readonly requests$ = this._requests$.asObservable();

	private _selectedTrack$: BehaviorSubject<TrackObjectFull> = new BehaviorSubject<TrackObjectFull>( undefined );
	public readonly selectedTrack$ = this._selectedTrack$.asObservable();

	constructor( private djrequestBackendService: DJRequestBackendService ) {
		this.loadInitialData();
	}

	loadInitialData() {
		this.djrequestBackendService.getAllRequests().subscribe( requests => {
			console.log(requests);
			this._requests$.next( requests );
		} );
	}

	setSelectedTrack( track: TrackObjectFull ): void {
		this._selectedTrack$.next( track );
	}

	hasSelectedTrack(): boolean {
		return this._selectedTrack$.getValue() !== undefined;
	}
}
