import {Table} from "./table.model";
import {Team} from "./team.model";
import {Match} from "./match.model";

export interface Score {
	id?:number;
	team?:Team;
	match?:Match;
	table?:Table;
}
