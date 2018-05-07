import {Component, OnDestroy, OnInit} from '@angular/core';
import {TeamService} from "../../core/services/team.service";
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable, Subject} from "rxjs";
import {Team} from "../../shared/model/team.model";
import {LayoutService} from "../../core/services/layout.service";
import {switchMap, takeUntil} from 'rxjs/operators';

@Component({
	selector: 'app-team-detail',
	templateUrl: './team-detail.component.html',
	styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit, OnDestroy {

	team$: Observable<Team>;
	team: Team;
	private unsubscribe$ = new Subject<void>();

	constructor(private route: ActivatedRoute, private service: TeamService, private layout: LayoutService) {
	}

	ngOnInit() {
		this.route.paramMap.pipe(switchMap((params: ParamMap) =>
			this.team$ = this.service.getTeam(+params.get('id'))));
		this.team$.pipe(takeUntil(this.unsubscribe$))
			.subscribe(team => {
			this.team = team;
			this.layout.setTitle('Team #' + team.id);
		});
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}


}
