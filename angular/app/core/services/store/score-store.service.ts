import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SailsService } from 'angular2-sails';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Score } from '../../../shared/model/score.model';
import { ScoreBackendService } from '../backend/score-backend.service';

@Injectable( {
	providedIn: 'root'
} )
export class ScoreStoreService {

	private _scores$: BehaviorSubject<Score[]> = new BehaviorSubject<Score[]>( [] );
	public readonly scores$ = this._scores$.asObservable();

	constructor( private scoreBackendService: ScoreBackendService, private sailsService: SailsService, private snackBar: MatSnackBar ) {
		this.loadInitialData();
	}

	loadInitialData() {
		this.scoreBackendService.getAllScores().subscribe( scores => {
			this._scores$.next( scores );
		} );
	}
}
