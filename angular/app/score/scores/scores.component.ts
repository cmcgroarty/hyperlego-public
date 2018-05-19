import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../core/services/layout.service';
import { ScoreStoreService } from '../../core/services/store/score-store.service';
import { Division } from '../../shared/model/division.enum';
import { MatchStatus } from '../../shared/model/match-status.enum';
import { Score } from '../../shared/model/score.model';

@Component( {
	selector: 'hyper-scores',
	templateUrl: './scores.component.html',
	styleUrls: [ './scores.component.scss' ]
} )
export class ScoresComponent implements OnInit, OnDestroy {
	selectedTab: number;
	filterScores$ = new Subject<Score[]>();
	private tabFilter$ = new Subject<string>();
	private unsubscribe$ = new Subject<void>();

	constructor( private layoutService: LayoutService, private scoreStoreService: ScoreStoreService ) {
		this.scoreStoreService.loadInitialData();
	}

	ngOnInit(): void {
		this.layoutService.setTitle( 'Scores' );
		combineLatest( this.scoreStoreService.scores$, this.tabFilter$ ).pipe( takeUntil( this.unsubscribe$ ) )
			.subscribe( ( [ scores, tabFilter ] ) => {
				this.filterTheScores( scores, tabFilter );
			} );
		setTimeout( () => this.tabFilter$.next( 'Latest' ), 0 );
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	filterTheScores( scores: Score[], tabFilter: string ): void {
		switch ( tabFilter ) {
			case 'Latest':
				this.filterScores$.next( this.filterNull(scores).sort( ( a: Score, b: Score ) => {
					return b.match.id - a.match.id;
				} ).slice( 0, 4 ) );
				break;
			case 'JA':
				this.filterScores$.next( this.filterNull(scores).filter( score => {
					return Division[ score.team.division ] === Division.JA;
				} ) );
				break;
			case 'JQA':
				this.filterScores$.next( this.filterNull(scores).filter( score => {
					return Division[ score.team.division ] === Division.JQA;
				} ) );
				break;
			default:
				this.filterScores$.next( this.filterNull(scores) );
				break;
		}

	}

	filterNull( scores: Score[] ) {
		return scores.filter( score =>
			score.total_score !== null && MatchStatus[ score.match.status ] === MatchStatus.PLAYED );
	}

	onSelect( $event: MatTabChangeEvent ): void {
		this.tabFilter$.next( $event.tab.textLabel );
	}

}
