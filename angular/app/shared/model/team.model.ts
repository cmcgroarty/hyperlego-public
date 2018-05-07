import {Division} from "./division.model";

export interface Team {
	id?: number;
	name?: string;
	division?: Division;
	school?: string;
	color?: string;
	city?: string;
	state?: string;
	contactName?: string;
	contactEmail?: string;
	here?: boolean;
	arrived?: Date;
	numKids?: number;
	//scores?:Score[];

}
