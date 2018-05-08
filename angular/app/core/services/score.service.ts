import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SCORES } from '../../shared/mocks/scores.mock';
import { Score } from '../../shared/model/score.model';

@Injectable( {
	providedIn: 'root'
} )
export class ScoreService {

	constructor( private http: HttpClient ) {
	}

	getAllScores(): Observable<Score[]> {
		//return this.http.get<Score[]>('');
		return of( SCORES );
	}

	getScore( id: number ): Observable<Score> {
		//return this.http.get<Score>(''+id);
		return of( SCORES.find( score => {
			return score.id === id;
		} ) );
	}

	createScore( score: Score ): Observable<Score> {
		return this.http.post( '', score );
	}

	updateScore( score: Score ): Observable<Score> {
		return this.http.put( '' + score.id, score );
	}

	deleteScore( id: number ): Observable<Object> {
		return this.http.delete( '' + id );
	}
}
