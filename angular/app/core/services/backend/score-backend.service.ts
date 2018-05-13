import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SCORES } from '../../../shared/mocks/scores.mock';
import { Score } from '../../../shared/model/score.model';

@Injectable( {
	providedIn: 'root'
} )
export class ScoreBackendService {

	constructor( private http: HttpClient ) {
	}

	getAllScores(): Observable<Score[]> {
		return this.http.get<Score[]>( 'http://d.idesignconsulting.com:1337/score/', {
			params: {
				limit: '100'
			}
		} );
		// return of( SCORES );
	}

	getNotNullScores(): Observable<Score[]> {
		return this.http.get<Score[]>( 'http://d.idesignconsulting.com:1337/api/score/not/null' );
	}

	getScore( id: number ): Observable<Score> {
		// return this.http.get<Score>(''+id);
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
