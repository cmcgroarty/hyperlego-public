import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SailsService } from 'angular2-sails';
import { Observable } from 'rxjs';
import { Team } from '../../../shared/model/team.model';
import { APIService } from '../api.service';

@Injectable( {
	providedIn: 'root'
} )
export class TeamBackendService {

	constructor( private http: HttpClient, private api: APIService, private sailsService: SailsService ) {
	}

	getAllTeams(): Observable<Team[]> {
		return this.http.get<Team[]>( this.api.url + '/team' );
	}

	getTeam( id: number ): Observable<Team> {
		return this.http.get<Team>( this.api.url + '/team/' + id );
	}

	createTeam( team: Team ): Observable<Team> {
		return this.http.post( this.api.url + '/team/', team );
	}

	updateTeam( team: Team ): Observable<Team> {
		return this.http.patch( this.api.url + '/team/' + team.id, team );
	}

	deleteTeam( id: number ): Observable<Object> {
		return this.http.delete( this.api.url + '/team/' + id );
	}


}
