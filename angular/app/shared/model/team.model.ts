import { Division } from './division.enum';
import { School } from './school.model';
import { Score } from './score.model';

export interface Team {
	id?: number;
	name?: string;
	division?: Division;
	school?: School;
	city?: string;
	state?: string;
	contactName?: string;
	contactEmail?: string;
	here?: boolean;
	arrived?: Date;
	numKids?: number;
	scores?: Score[];
	teamPhoto?: string;
	robotPhoto?: string;

}
