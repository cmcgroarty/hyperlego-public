import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../core/services/layout.service';
import { MatchService } from '../../core/services/match.service';
import { MatchStatus } from '../../shared/model/match-status.model';
import { Match } from '../../shared/model/match.model';
import { Score } from '../../shared/model/score.model';
import { Table } from '../../shared/model/table.model';

@Component( {
	selector: 'hyper-matches',
	templateUrl: './matches.component.html',
	styleUrls: [ './matches.component.scss' ],
	encapsulation: ViewEncapsulation.None
} )
export class MatchesComponent implements OnInit, OnDestroy, AfterViewInit {

	matches$: Observable<Match[]>;
	playing: Match;
	table = Table;
	private unsubscribe$ = new Subject<void>();

	constructor( private layout: LayoutService, private service: MatchService, private scroll: PageScrollService, @Inject( DOCUMENT ) private document: any ) {
	}

	ngOnInit() {
		this.layout.setTitle( 'Schedule' );
		this.matches$ = this.service.getAllMatches().pipe( takeUntil( this.unsubscribe$ ) );
		this.matches$.subscribe( matches => {
			this.playing = matches.find( match => {
				return match.status === MatchStatus.PLAYING;
			} );
		} );
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	ngAfterViewInit() {
		if ( this.playing !== undefined ) {
			const pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance( {
				document: this.document,
				pageScrollOffset: 0,
				scrollTarget: '#match' + this.playing.id,
				verticalScrolling: true
			} );
			this.scroll.start( pageScrollInstance );
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

	getScoreByTable( scores: Score[], table: Table ): Score {
		return scores.find( score => {
			return score.table === table;
		} );
	}

}
