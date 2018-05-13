import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../../core/services/layout.service';
import { SailsSocketService } from '../../../core/services/sails-socket.service';
import { TimerStoreService } from '../../../core/services/store/timer-store.service';
import { TimerStatus } from '../../../shared/model/timer-status.model';
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
	private unsubscribe$ = new Subject<void>();

	constructor(
		private layoutService: LayoutService,
		public timerStoreService: TimerStoreService,
		public sailsSocketService: SailsSocketService
	) {
		this.layoutService.setTitle( 'Timer Control' );
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
		this.timer = next;
	}

}
