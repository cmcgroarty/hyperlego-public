import { SchoolLevel } from './school-level.enum';

export interface School {
	id?: number;
	name?: string;
	level?: SchoolLevel;
	color?: string;
}
