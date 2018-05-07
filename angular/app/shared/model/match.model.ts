import {MatchStatus} from './match-status.model';
import {MatchType} from './match-type.model';
import {Score} from "./score.model";

export interface Match {
	id?: number;
	time?:Date;
	type?:MatchType;
	round?:number;
	status?:MatchStatus;
	scores?:Score[];
}
