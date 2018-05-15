import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SailsService } from 'angular2-sails';
import { Observable, of } from 'rxjs';
import { JWR } from '../../../shared/model/jwr.model';
import { Match } from '../../../shared/model/match.model';

@Injectable( {
	providedIn: 'root'
} )
export class MatchBackendService {

	constructor( private http: HttpClient, private sailsService: SailsService  ) {
	}

	getAllMatches(): Observable<JWR<Match[]>> {
		return this.sailsService.get('/match');
		// return this.http.get<Match[]>( 'http://d.idesignconsulting.com:1337/match' );
	}

	getCurrentMatch(): Observable<JWR<Match>> {
		return this.sailsService.get('/api/match/current');
		// return this.http.get<Match>( 'http://d.idesignconsulting.com:1337/api/match/current' );
	}

	setNextMatch( next?: Match ): Observable<Match> {
		return this.http.post<Match>( 'http://d.idesignconsulting.com:1337/api/match/next',
			( next !== undefined ? { id: next.id } : {} ) );
	}

	getMatch( id: number ): Observable<Match> {
		return this.http.get<Match>('' + id);
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
