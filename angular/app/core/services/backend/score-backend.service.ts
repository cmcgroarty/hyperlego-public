import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SailsService } from 'angular2-sails';
import { Observable } from 'rxjs';
import { Score } from '../../../shared/model/score.model';
import { APIService } from '../api.service';

@Injectable( {
	providedIn: 'root'
} )
export class ScoreBackendService {

	constructor( private http: HttpClient, private api: APIService, private sailsService: SailsService ) {
	}

	getAllScores(): Observable<Score[]> {
		return this.http.get<Score[]>( this.api.url + '/score/', {
			params: {
				limit: '100'
			}
		} );
	}

	getNotNullScores(): Observable<Score[]> {
		return this.http.get<Score[]>( this.api.url + '/score/not/null' );
	}

	getScore( id: number ): Observable<Score> {
		return this.http.get<Score>( this.api.url + '/score/' + id );
	}

	createScore( score: Score ): Observable<Score> {
		return this.http.post( this.api.url + '/score/', score );
	}

	updateScore( score: Score ): Observable<Score> {
		return this.http.put( this.api.url + '/score/' + score.id, score );
	}

	deleteScore( id: number ): Observable<Object> {
		return this.http.delete( '' + id );
	}
}
