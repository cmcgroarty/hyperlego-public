import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import {HttpClient} from "@angular/common/http";
import {Team} from "../../shared/model/team.model";
import {TEAMS} from "../../shared/mocks/teams.mock";

@Injectable()
export class TeamService {

	constructor(private http: HttpClient) {
	}

	getAllTeams(): Observable<Team[]> {
		//return this.http.get<Team>('');
		return Observable.of(TEAMS);
	}

	getTeam(id: number): Observable<Team> {
		//return this.http.get<Team>('' + id);
		return Observable.of(TEAMS.find(team => {return team.id === id;}));
	}

	createTeam(team: Team): Observable<Team> {
		return this.http.post('', team);
	}

	updateTeam(team: Team): Observable<Team> {
		return this.http.put('' + team.id, team);
	}

	deleteTeam(id: number) {
		return this.http.delete('' + id);
	}


}
