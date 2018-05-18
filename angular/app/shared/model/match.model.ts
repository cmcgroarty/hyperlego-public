import { MatchStatus } from './match-status.enum';
import { MatchType } from './match-type.enum';
import { Score } from './score.model';

export interface Match {
	id?: number;
	time?: Date;
	type?: MatchType;
	round?: number;
	status?: MatchStatus;
	scores?: Score[];
}
