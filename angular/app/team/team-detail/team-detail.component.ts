import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../core/services/layout.service';
import { TeamService } from '../../core/services/team.service';
import { Team } from '../../shared/model/team.model';

@Component( {
	selector: 'hyper-team-detail',
	templateUrl: './team-detail.component.html',
	styleUrls: [ './team-detail.component.scss' ]
} )
export class TeamDetailComponent implements OnInit, OnDestroy {

	team$: Observable<Team>;
	team: Team;
	private unsubscribe$ = new Subject<void>();

	constructor( private route: ActivatedRoute, private service: TeamService, private layout: LayoutService ) {
	}

	ngOnInit() {
		this.team$ = this.route.paramMap.pipe( switchMap( ( params: ParamMap ) => {
			return this.service.getTeam( +params.get( 'id' ) );
		} ) );
		this.team$.pipe( takeUntil( this.unsubscribe$ ) )
			.subscribe( team => {
				this.team = team;
				this.layout.setTitle( 'Team #' + team.id );
			} );
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}


}
