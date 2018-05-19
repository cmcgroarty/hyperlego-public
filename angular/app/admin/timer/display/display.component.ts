import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';
import { Subject } from 'rxjs/index';
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
	selector: 'hyper-display',
	templateUrl: './display.component.html',
	styleUrls: [ './display.component.scss' ],
} )
export class DisplayComponent implements OnInit, OnDestroy {

	@HostBinding( 'class' ) hostClass = 'fullpage';
	public timer: Timer;
	public currentMatch: Match;
	private charge: Howl;
	private hurry: Howl;
	private buzzer: Howl;
	private foghorn: Howl;
	private unsubscribe$ = new Subject<void>();

	constructor(
		private layoutService: LayoutService,
		public timerStoreService: TimerStoreService,
		public sailsSocketService: SailsSocketService,
		private matchBackendService: MatchBackendService,
		private matchStoreService: MatchStoreService
	) {
		this.timer = {};

		this.charge = new Howl( { src: [ 'assets/sounds/CHARGE.wav' ], html5: false } );
		this.hurry = new Howl( { src: [ 'assets/sounds/TimeToRun.wav' ], html5: false } );
		this.buzzer = new Howl( { src: [ 'assets/sounds/BUZZER.wav' ], html5: false } );
		this.foghorn = new Howl( { src: [ 'assets/sounds/FOGHORN.wav' ], html5: false } );

		Howler.autoSuspend = false;
	}

	ngOnInit() {
		this.layoutService.setTitle( 'Timer Display' );
		this.layoutService.forceSidenavClose = true;
		this.subscribe();
		this.matchStoreService.getCurrentMatch();
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	processTimer( next: Timer ) {
		if ( this.timer.status === TimerStatus.READY ) {
			if ( next.status === TimerStatus.RUNNING && !this.isAudioSuspended() ) {
				this.charge.play();
			}
		} else if ( this.timer.status === TimerStatus.RUNNING ) {
			if ( next.status === TimerStatus.STOPPED && !this.isAudioSuspended() ) {
				this.foghorn.play();
			} else if ( next.status === TimerStatus.RUNNING ) {
				if ( next.time === 30 && !this.isAudioSuspended() ) {
					this.hurry.play();
				} else if ( next.time === 0 && !this.isAudioSuspended() ) {
					this.buzzer.play();
				}
			}
		}
		this.timer = next;
	}

	isAudioSuspended(): boolean {
		return Howler.ctx.state === 'suspended';
	}

	unlockAudio(): void {
		if ( this.isAudioSuspended() ) {
			Howler.ctx.resume();
		}
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
			} );
	}

}
