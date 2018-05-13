import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Team } from '../../../shared/model/team.model';
import { TeamBackendService } from '../backend/team-backend.service';

@Injectable( {
	providedIn: 'root'
} )
export class TeamStoreService {

	private _teams$: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>( [] );
	public readonly teams$ = this._teams$.asObservable();

	constructor( private teamBackendService: TeamBackendService ) {
		this.loadInitialData();
	}

	loadInitialData() {
		this.teamBackendService.getAllTeams().subscribe( teams => {
			this._teams$.next( teams );
		} );
	}
}
