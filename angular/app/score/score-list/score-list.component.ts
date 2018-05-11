import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Division } from '../../shared/model/division.model';
import { Score } from '../../shared/model/score.model';
import { Table } from '../../shared/model/table.model';

@Component( {
	selector: 'hyper-score-list',
	templateUrl: './score-list.component.html',
	styleUrls: [ './score-list.component.scss' ],
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
export class ScoreListComponent implements OnInit {
	@Input() scores: Observable<Score[]>;
	divisions = Division;
	table = Table;

	constructor() {
	}

	ngOnInit() {
	}

}
