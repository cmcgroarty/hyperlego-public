import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Howl } from 'howler';
import { Subject } from 'rxjs/index';
import { takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../../core/services/layout.service';
import { SailsSocketService } from '../../../core/services/sails-socket.service';
import { TimerStoreService } from '../../../core/services/store/timer-store.service';
import { TimerStatus } from '../../../shared/model/timer-status.model';
import { Timer } from '../../../shared/model/timer.model';

@Component( {
	selector: 'hyper-display',
	templateUrl: './display.component.html',
	styleUrls: [ './display.component.scss' ],
} )
export class DisplayComponent implements OnInit, OnDestroy {

	@HostBinding( 'class' ) hostClass = 'fullpage';
	public timer: Timer;
	private charge: Howl;
	private hurry: Howl;
	private buzzer: Howl;
	private foghorn: Howl;
	private unsubscribe$ = new Subject<void>();

	constructor(
		private layoutService: LayoutService,
		public timerStoreService: TimerStoreService,
		public sailsSocketService: SailsSocketService
	) {
		this.layoutService.setTitle( 'Timer Display' );
		this.layoutService.forceSidenavClose = true;
		this.timer = {};

		this.charge = new Howl( { src: [ 'assets/sounds/CHARGE.wav' ], html5: true } );
		this.hurry = new Howl( { src: [ 'assets/sounds/TimeToRun.wav' ], html5: true } );
		this.buzzer = new Howl( { src: [ 'assets/sounds/BUZZER.wav' ], html5: true } );
		this.foghorn = new Howl( { src: [ 'assets/sounds/FOGHORN.wav' ], html5: true } );
	}

	ngOnInit() {
		this.timerStoreService.timer$
			.pipe( takeUntil( this.unsubscribe$ ) )
			.subscribe( timer => {
				this.processTimer( timer );
			} );
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	processTimer( next: Timer ) {
		if ( this.timer.status === TimerStatus.READY ) {
			if ( next.status === TimerStatus.RUNNING ) {
				this.charge.play();
			}
		} else if ( this.timer.status === TimerStatus.RUNNING ) {
			if ( next.status === TimerStatus.STOPPED ) {
				this.foghorn.play();
			} else if ( next.status === TimerStatus.RUNNING ) {
				if ( next.time === 30 ) {
					this.hurry.play();
				} else if ( next.time === 0 ) {
					this.buzzer.play();
				}
			}
		}
		this.timer = next;
	}

}
