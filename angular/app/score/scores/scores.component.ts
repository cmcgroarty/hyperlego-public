import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../core/services/layout.service';
import { ScoreService } from '../../core/services/score.service';
import { Division } from '../../shared/model/division.model';
import { MatchStatus } from '../../shared/model/match-status.model';
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

	constructor( private layout: LayoutService, private service: ScoreService ) {
	}

	ngOnInit(): void {
		this.layout.setTitle( 'Scores' );
		combineLatest( this.service.getAllScores(), this.tabFilter$ ).pipe( takeUntil( this.unsubscribe$ ) )
			.subscribe( ( [ scores, tabFilter ] ) => {
				this.filterTheScores( scores.filter( score => {
					return score.match.status === MatchStatus.PLAYED;
				} ), tabFilter );
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
				this.filterScores$.next( scores.sort( ( a: Score, b: Score ) => {
					return b.id - a.id;
				} ).slice( 0, 4 ) );
				break;
			case 'JA':
				this.filterScores$.next( scores.filter( score => {
					return score.team.division === Division.JA;
				} ) );
				break;
			case 'JQA':
				this.filterScores$.next( scores.filter( score => {
					return score.team.division === Division.JQA;
				} ) );
				break;
			default:
				this.filterScores$.next( scores );
				break;
		}

	}

	onSelect( $event: MatTabChangeEvent ): void {
		this.tabFilter$.next( $event.tab.textLabel );
	}

}