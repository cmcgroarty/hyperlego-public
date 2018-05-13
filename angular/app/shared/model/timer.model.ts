import { TimerStatus } from './timer-status.model';

export interface Timer {
	status?: TimerStatus;
	time?: number;
}
