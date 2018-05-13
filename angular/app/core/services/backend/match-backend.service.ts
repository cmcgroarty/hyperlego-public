import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MATCHES } from '../../../shared/mocks/matches.mock';
import { Match } from '../../../shared/model/match.model';

@Injectable( {
	providedIn: 'root'
} )
export class MatchBackendService {

	constructor( private http: HttpClient ) {
	}

	getAllMatches(): Observable<Match[]> {
		return this.http.get<Match[]>( 'http://d.idesignconsulting.com:1337/match' );
		// return of( MATCHES );
	}

	getMatch( id: number ): Observable<Match> {
		// retutn this.http.get<Match>('' + id);
		return of( MATCHES.find( match => {
			return match.id === id;
		} ) );
	}

	createMatch( match: Match ): Observable<Match> {
		return this.http.post( '', match );
	}

	updateMatch( match: Match ): Observable<Match> {
		return this.http.put( '' + match.id, match );
	}

	deleteMatch( id: number ): Observable<Object> {
		return this.http.delete( '' + id );
	}


}
