import { Component, Input, OnInit } from '@angular/core';
import { MatchStatus } from '../../shared/model/match-status.model';
import { Match } from '../../shared/model/match.model';

@Component( {
	selector: 'match-list',
	templateUrl: './match-list.component.html',
	styleUrls: [ './match-list.component.scss' ]
} )
export class MatchListComponent implements OnInit {

	@Input() status: MatchStatus;
	@Input() matches: Match[];

	constructor() {
	}

	ngOnInit() {
	}

	filteredMatches(): Match[] {
		return this.matches;
	}

}
