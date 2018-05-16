import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SailsService } from 'angular2-sails';
import { Observable } from 'rxjs';
import { JWR } from '../../../shared/model/jwr.model';
import { Match } from '../../../shared/model/match.model';
import { APIService } from '../api.service';

@Injectable( {
	providedIn: 'root'
} )
export class MatchBackendService {

	constructor( private http: HttpClient, private api: APIService, private sailsService: SailsService ) {
	}

	getAllMatches(): Observable<JWR<Match[]>> {
		return this.sailsService.get( this.api.prefix + '/match' );
		// return this.http.get<Match[]>( 'http://d.idesignconsulting.com:1337/match' );
	}

	getCurrentMatch(): Observable<JWR<Match>> {
		return this.sailsService.get( this.api.prefix + '/match/current' );
		// return this.http.get<Match>( 'http://d.idesignconsulting.com:1337/api/match/current' );
	}

	setNextMatch( next?: Match ): Observable<Match> {
		return this.http.post<Match>( this.api.url + '/match/next',
			( next !== undefined ? { id: next.id } : {} ) );
	}

	getMatch( id: number ): Observable<Match> {
		return this.http.get<Match>( this.api.url + '/match/' + id );
	}

	createMatch( match: Match ): Observable<Match> {
		return this.http.post( this.api.url + '/match/', match );
	}

	updateMatch( match: Match ): Observable<Match> {
		return this.http.put( this.api.url + '/match/' + match.id, match );
	}

	deleteMatch( id: number ): Observable<Object> {
		return this.http.delete( this.api.url + '/match/' + id );
	}


}
