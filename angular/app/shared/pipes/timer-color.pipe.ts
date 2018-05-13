import { Pipe, PipeTransform } from '@angular/core';
import { Timer } from '../model/timer.model';

@Pipe( {
	name: 'timerColor'
} )
export class TimerColorPipe implements PipeTransform {

	transform( timer: Timer, args?: any ): string {
		const running = 'green', hurry = 'orange', end = 'red', stopped = 'firebrick';

		let color = '';
		if ( timer.status === 'stopped' ) {
			color = stopped;
		} else if ( timer.time > 30 ) {
			color = running;
		} else if ( timer.time > 0 ) {
			color = hurry;
		} else if ( timer.time === 0 ) {
			color = end;
		} else {
			color = 'inherit';
		}

		return color;
	}

}
