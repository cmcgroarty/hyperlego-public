import { Component, HostBinding, Input, OnChanges } from '@angular/core';
import { Score } from '../../model/score.model';
import { Table } from '../../model/table.model';

@Component( {
	selector: 'hyper-score-table-display',
	templateUrl: './score-table-display.component.html',
	styleUrls: [ './score-table-display.component.scss' ]
} )
export class ScoreTableDisplayComponent implements OnChanges {
	@HostBinding( 'class' ) hostClass = 'fullpage';
	@Input() scores: Score[];
	@Input() bigTeamText = false;
	public score1A: Score;
	public score1B: Score;
	public score2A: Score;
	public score2B: Score;

	constructor() {
	}

	ngOnChanges() {
		if ( this.scores && this.scores !== undefined) {
			this.score1A = this.scores.find( score => {
				return this.equalsTable( score.table_name, Table.ONE_A );
			} );
			this.score1B = this.scores.find( score => {
				return this.equalsTable( score.table_name, Table.ONE_B );
			} );
			this.score2A = this.scores.find( score => {
				return this.equalsTable( score.table_name, Table.TWO_A );
			} );
			this.score2B = this.scores.find( score => {
				return this.equalsTable( score.table_name, Table.TWO_B );
			} );
		}

	}

	equalsTable( table_name: string, table: Table ): boolean {
		return Table[ table_name ] === table || table_name === table;
	}

}
