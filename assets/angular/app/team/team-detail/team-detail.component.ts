import {Component, OnInit} from '@angular/core';
import {TeamService} from "../../core/services/team.service";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from "rxjs/Observable";
import {Team} from "../../shared/model/team.model";
import {LayoutService} from "../../core/services/layout.service";

@Component({
	selector: 'app-team-detail',
	templateUrl: './team-detail.component.html',
	styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

	team: Team;

	constructor(private route: ActivatedRoute, private service: TeamService, private layout: LayoutService) {
	}

	ngOnInit() {
		this.route.paramMap
			.switchMap((params: ParamMap) =>
				this.service.getTeam(+params.get('id')))
			.subscribe(team => {
				this.team = team;
				this.layout.setTitle('Team #'+team.id);
			});
	}


}
