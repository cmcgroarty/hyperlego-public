import { Match } from './match.model';
import { Table } from './table.model';
import { Team } from './team.model';

export interface Score {
	id?: number;
	team?: Team;
	match?: Match;
	table?: Table;
	total_score?: number;
}
