import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../../shared/model/team.model';

@Injectable( {
	providedIn: 'root'
} )
export class TeamBackendService {

	constructor( private http: HttpClient ) {
	}

	getAllTeams(): Observable<Team[]> {
		return this.http.get<Team[]>( 'http://d.idesignconsulting.com:1337/team' );
		// return of( TEAMS );
	}

	getTeam( id: number ): Observable<Team> {
		return this.http.get<Team>( 'http://d.idesignconsulting.com:1337/team/' + id );
		/*
		return of( TEAMS.find( team => {
			return team.id === id;
		} ) );
		*/
	}

	createTeam( team: Team ): Observable<Team> {
		return this.http.post( '', team );
	}

	updateTeam( team: Team ): Observable<Team> {
		return this.http.put( '' + team.id, team );
	}

	deleteTeam( id: number ): Observable<Object> {
		return this.http.delete( '' + id );
	}


}
