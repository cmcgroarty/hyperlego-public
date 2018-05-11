import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { LayoutService } from '../../core/services/layout.service';
import { TeamService } from '../../core/services/team.service';
import { Division } from '../../shared/model/division.model';
import { Team } from '../../shared/model/team.model';

@Component( {
	selector: 'hyper-teams',
	templateUrl: './teams.component.html',
	styleUrls: [ './teams.component.scss' ]
} )
export class TeamsComponent implements OnInit, OnDestroy {

	teams$: Observable<Team[]>;
	filteredTeams: Team[];
	tabDivision: Division = undefined;
	selectedTab = 0;
	private unsubscribe$ = new Subject<void>();

	constructor( private layout: LayoutService, private service: TeamService ) {
	}

	ngOnInit() {
		this.layout.setTitle( 'Teams' );
		this.teams$ = this.service.getAllTeams();
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	onSelect( $event: MatTabChangeEvent ): void {
		switch ( $event.tab.textLabel ) {
			case 'JA':
				this.tabDivision = Division.JA;
				break;
			case 'JQA':
				this.tabDivision = Division.JQA;
				break;
			default:
				this.tabDivision = undefined;
				break;
		}
	}

}
