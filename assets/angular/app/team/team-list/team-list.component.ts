import {Component, Input, OnInit} from '@angular/core';
import {Division} from "../../shared/model/division.model";
import {Team} from "../../shared/model/team.model";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
	selector: 'team-list',
	templateUrl: './team-list.component.html',
	styleUrls: ['./team-list.component.scss'],
	animations: [
		trigger('fadeInOut', [
			transition(':enter', [
				style({ opacity: '0' }),
				animate('.5s ease-out', style({ opacity: '1' })),
			]),
			transition(':leave', [
				style({ opacity: '1' }),
				animate('.5s ease-out', style({ opacity: '0' })),
			]),
		]),
	],
})
export class TeamListComponent implements OnInit {

	@Input() division: Division;
	@Input() teams: Team[];

	constructor() {
	}

	ngOnInit() {
	}


}
