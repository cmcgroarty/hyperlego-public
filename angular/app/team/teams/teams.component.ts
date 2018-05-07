import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {TeamService} from "../../core/services/team.service";
import {Team} from "../../shared/model/team.model";
import {Division} from "../../shared/model/division.model";
import {LayoutService} from "../../core/services/layout.service";
import {MatTabChangeEvent} from "@angular/material";
import {Observable, Subject} from "rxjs";

@Component({
	selector: 'app-teams',
	templateUrl: './teams.component.html',
	styleUrls: ['./teams.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class TeamsComponent implements OnInit, OnDestroy {

	teams$: Observable<Team[]>;
	tabDivision: Division = undefined;
	selectedTab: number = 0;
	private unsubscribe = new Subject<void>();

	constructor(private layout: LayoutService, private service: TeamService) {
	}

	ngOnInit() {
		this.layout.setTitle('Teams');
		this.teams$ = this.service.getAllTeams();
	}

	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}

	onSelect($event: MatTabChangeEvent): void {
		switch ($event.tab.textLabel) {
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
