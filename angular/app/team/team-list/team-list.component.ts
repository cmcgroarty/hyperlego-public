import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Division } from '../../shared/model/division.model';
import { Team } from '../../shared/model/team.model';
import { ByDivisionPipe } from '../../shared/pipes/by-division.pipe';

@Component( {
	selector: 'team-list',
	templateUrl: './team-list.component.html',
	styleUrls: [ './team-list.component.scss' ],
	encapsulation: ViewEncapsulation.None,
	animations: [
		trigger( 'fadeInOut', [
			transition( ':enter', [
				style( { opacity: '0' } ),
				animate( '.5s ease-out', style( { opacity: '1' } ) ),
			] ),
			transition( ':leave', [
				style( { opacity: '1' } ),
				animate( '.5s ease-out', style( { opacity: '0' } ) ),
			] ),
		] ),
	],
} )
export class TeamListComponent implements OnInit {

	@Input() division: Division;
	@Input() teams: Team[];

	constructor( private byDivisionPipe: ByDivisionPipe ) {
	}

	ngOnInit() {
	}

	filteredTeams(): Team[] {
		return this.byDivisionPipe.transform( this.teams, this.division );
	}


}
