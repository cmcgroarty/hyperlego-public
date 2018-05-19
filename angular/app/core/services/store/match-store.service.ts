import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SailsService } from 'angular2-sails';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { MatchStatus } from '../../../shared/model/match-status.enum';
import { Match } from '../../../shared/model/match.model';
import { MatchBackendService } from '../backend/match-backend.service';

@Injectable( {
	providedIn: 'root'
} )
export class MatchStoreService {

	private _matches$: BehaviorSubject<Match[]> = new BehaviorSubject<Match[]>( [] );
	public readonly matches$ = this._matches$.asObservable();
	private _currentMatch$: BehaviorSubject<Match> = new BehaviorSubject<Match>( undefined );
	public readonly currentMatch$ = this._currentMatch$.asObservable();

	constructor( private matchBackendService: MatchBackendService, private sailsService: SailsService, private snackBar: MatSnackBar ) {
		this.loadInitialData();
		this.subscribe();
	}

	loadInitialData() {
		this.matchBackendService.getAllMatches().subscribe( res => {
			this._matches$.next( res.data );
		} );
	}

	getCurrentMatch() {
		this.matchBackendService.getCurrentMatch().subscribe( res => {
				this._currentMatch$.next( res.data );
			},
			err => {
				if ( err.statusCode && err.statusCode === 404 ) {
					this.snackBar.open( 'No Match Queued Yet' );
				}
			} );
	}

	subscribe() {
		this.sailsService.on( 'match' ).subscribe( updatedMatch => {
			const matches = this._matches$.getValue();
			const updatedMatchIndex = matches.findIndex( match => {
				return match.id === updatedMatch.id;
			} );
			if ( updatedMatchIndex > -1 ) {
				matches.splice( updatedMatchIndex, 1, updatedMatch );
				this._matches$.next( matches );
			}
			if ( updatedMatch.status === MatchStatus.PLAYING ) {
				this._currentMatch$.next( updatedMatch );
			}
		} );
	}
}
