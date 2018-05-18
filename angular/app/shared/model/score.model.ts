import { Match } from './match.model';
import { Table } from './table.enum';
import { Team } from './team.model';

export interface Score {
	id?: number;
	team?: Team;
	match?: Match;
	table_name?: Table;
	total_score?: number;
}
