import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TEAMS } from '../../shared/mocks/teams.mock';
import { Team } from '../../shared/model/team.model';

@Injectable( {
	providedIn: 'root'
} )
export class TeamService {

	constructor( private http: HttpClient ) {
	}

	getAllTeams(): Observable<Team[]> {
		//return this.http.get<Team[]>('');
		return of( TEAMS );
	}

	getTeam( id: number ): Observable<Team> {
		//return this.http.get<Team>('' + id);
		return of( TEAMS.find( team => {
			return team.id === id;
		} ) );
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
