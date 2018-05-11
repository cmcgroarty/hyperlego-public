import { SchoolLevel } from './school-level.model';

export interface School {
	id?: number;
	name?: string;
	level?: SchoolLevel;
	color?: string;
}
