import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Score } from '../../shared/model/score.model';
import { ScoreBackendService } from './score-backend.service';

@Injectable( {
	providedIn: 'root'
} )
export class ScoreStoreService {

	private _scores$: BehaviorSubject<Score[]> = new BehaviorSubject<Score[]>( [] );
	public readonly scores$ = this._scores$.asObservable();

	constructor( private scoreBackendService: ScoreBackendService ) {
		this.loadInitialData();
	}

	loadInitialData() {
		this.scoreBackendService.getNotNullScores().subscribe( scores => {
			this._scores$.next( scores );
		} );
	}
}
