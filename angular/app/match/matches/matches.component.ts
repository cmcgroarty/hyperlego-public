import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../core/services/layout.service';
import { MatchStoreService } from '../../core/services/store/match-store.service';
import { MatchStatus } from '../../shared/model/match-status.enum';
import { Match } from '../../shared/model/match.model';
import { Score } from '../../shared/model/score.model';
import { Table } from '../../shared/model/table.enum';

@Component( {
	selector: 'hyper-matches',
	templateUrl: './matches.component.html',
	styleUrls: [ './matches.component.scss' ],

} )
export class MatchesComponent implements OnInit, OnDestroy {

	playing: Match;
	table = Table;
	matches: Match[];
	private initialMatchesLoaded = false;
	private unsubscribe$ = new Subject<void>();

	constructor(
		private layoutService: LayoutService,
		private matchStore: MatchStoreService,
		private scroll: PageScrollService,
		@Inject( DOCUMENT ) private document: any
	) {
	}

	ngOnInit() {
		this.layoutService.setTitle( 'Schedule' );
		this.matchStore.matches$.pipe( takeUntil( this.unsubscribe$ ) )
			.subscribe( matches => {
				this.matches = matches;
				if ( !this.initialMatchesLoaded ) {
					this.playing = matches.find( match => {
						return match.status === MatchStatus.PLAYING;
					} );
					setTimeout( () => this.scrollToPlaying(), 500 );
				}
			} );
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	scrollToPlaying() {
		if ( this.playing !== undefined ) {
			const pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance( {
				document: this.document,
				pageScrollOffset: (this.layoutService.isHandset ? 58 : 66),
				scrollTarget: '#match' + this.playing.id,
				verticalScrolling: true,
				scrollingViews: [this.layoutService.scrollContainer.nativeElement]
			} );
			this.scroll.start( pageScrollInstance );
			this.initialMatchesLoaded = true;
		}
	}

	matchStatusClass( status: MatchStatus ): string {
		switch ( status ) {
			case MatchStatus.PLAYED:
				return 'played';
			case MatchStatus.PLAYING:
				return 'hyper-dark-theme';
			default:
				return '';
		}
	}

	isMatchPlaying( match: Match ): boolean {
		return match.status === MatchStatus.PLAYING;
	}

}
