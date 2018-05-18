import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Division } from '../../shared/model/division.enum';
import { Team } from '../../shared/model/team.model';
import { ByDivisionPipe } from '../../shared/pipes/by-division.pipe';

@Component( {
	selector: 'hyper-team-list',
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
	divisions = Division;
	router = this._router;

	constructor( private byDivisionPipe: ByDivisionPipe, private _router: Router ) {
	}

	ngOnInit() {
	}

	filteredTeams(): Team[] {
		return this.byDivisionPipe.transform( this.teams, this.division );
	}


}
