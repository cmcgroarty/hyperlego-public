import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { MatchBackendService } from '../../../core/services/backend/match-backend.service';
import { LayoutService } from '../../../core/services/layout.service';
import { SailsSocketService } from '../../../core/services/sails-socket.service';
import { MatchStoreService } from '../../../core/services/store/match-store.service';
import { TimerStoreService } from '../../../core/services/store/timer-store.service';
import { Match } from '../../../shared/model/match.model';
import { TimerStatus } from '../../../shared/model/timer-status.enum';
import { Timer } from '../../../shared/model/timer.model';

@Component( {
	selector: 'hyper-control',
	templateUrl: './control.component.html',
	styleUrls: [ './control.component.scss' ]
} )
export class ControlComponent implements OnInit, OnDestroy {

	@HostBinding( 'class' ) hostClass = 'fullpage';
	public timer: Timer;
	public timerStatus = TimerStatus;
	public waitingNextMatch = true;
	public currentMatch: Match;
	private unsubscribe$ = new Subject<void>();

	constructor(
		private layoutService: LayoutService,
		public timerStoreService: TimerStoreService,
		public sailsSocketService: SailsSocketService,
		private matchBackendService: MatchBackendService,
		private matchStoreService: MatchStoreService
	) {
		this.layoutService.setTitle( 'Timer Control' );
	}

	ngOnInit() {
		this.subscribe();
		this.matchStoreService.getCurrentMatch();
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}
	isRunning(){
		return TimerStatus.RUNNING === this.timer.status && this.timer.time > 0;
	}

	processTimer( next: Timer ) {
		if ( next.status === TimerStatus.RUNNING && next.time === 0 ) {
			this.waitingNextMatch = true;
		}
		this.timer = next;
	}

	getNextMatch() {
		this.timerStoreService.resetTimer();
		this.matchBackendService.setNextMatch().subscribe( () => {
			this.waitingNextMatch = false;
		} );

	}

	subscribe() {
		this.timerStoreService.timer$
			.pipe( takeUntil( this.unsubscribe$ ) )
			.subscribe( timer => {
				this.processTimer( timer );
			} );
		this.matchStoreService.currentMatch$
			.pipe( takeUntil( this.unsubscribe$ ) )
			.subscribe( currentMatch => {
				this.currentMatch = currentMatch;
				if ( currentMatch !== undefined ) {
					this.waitingNextMatch = false;
				}
			} );
	}

}
