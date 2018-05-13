import { Injectable } from '@angular/core';
import { SailsService } from 'angular2-sails';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TimerStatus } from '../../../shared/model/timer-status.model';
import { Timer } from '../../../shared/model/timer.model';
import { TimerBackendService } from '../backend/timer-backend.service';

@Injectable( {
	providedIn: 'root'
} )
export class TimerStoreService {

	private _timer$: BehaviorSubject<Timer> = new BehaviorSubject<Timer>( { status: TimerStatus.STOPPED, time: 0 } );
	public readonly timer$ = this._timer$.asObservable();

	constructor( private timerBackendService: TimerBackendService, private sailsService: SailsService ) {
		this.loadInitialData();
		this.subscribe();
	}

	loadInitialData() {
		this.timerBackendService.getTimer().subscribe( res => {
			this._timer$.next( res.data );
		} );
	}

	startTimer() {
		this.timerBackendService.startTimer().subscribe();
	}

	stopTimer() {
		this.timerBackendService.stopTimer().subscribe();
	}

	resetTimer() {
		this.timerBackendService.resetTimer().subscribe();
	}

	private subscribe() {
		this.sailsService.on( 'timerUpdate' ).subscribe( timer => {
			this._timer$.next( timer );
		} );
	}
}
