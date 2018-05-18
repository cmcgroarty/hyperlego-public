import { TimerStatus } from './timer-status.enum';

export interface Timer {
	status?: TimerStatus;
	time?: number;
}
