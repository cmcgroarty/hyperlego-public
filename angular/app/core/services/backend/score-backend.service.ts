import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
	}

	getNotNullScores(): Observable<Score[]> {
		return this.http.get<Score[]>( 'http://d.idesignconsulting.com:1337/api/score/not/null' );
	}

	getScore( id: number ): Observable<Score> {
		return this.http.get<Score>( '' + id );
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
