import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Match } from '../../shared/model/match.model';
import { MatchBackendService } from './match-backend.service';

@Injectable( {
	providedIn: 'root'
} )
export class MatchStoreService {

	private _matches$: BehaviorSubject<Match[]> = new BehaviorSubject<Match[]>( [] );
	public readonly matches$ = this._matches$.asObservable();

	constructor( private matchBackendService: MatchBackendService ) {
		this.loadInitialData();
	}

	loadInitialData() {
		this.matchBackendService.getAllMatches().subscribe( matches => {
			this._matches$.next( matches );
		} );
	}
}
