import { UserRole } from './user-role.enum';

export interface NavItem {
	order?: number;
	route?: string;
	title?: string;
	icon?: string;
	roles?: UserRole[];
}
