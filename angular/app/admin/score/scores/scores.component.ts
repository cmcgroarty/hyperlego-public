import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { Subject } from 'rxjs/index';
import { takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../../core/services/layout.service';
import { ScoreStoreService } from '../../../core/services/store/score-store.service';
import { MatchStatus } from '../../../shared/model/match-status.enum';
import { Score } from '../../../shared/model/score.model';

@Component( {
	selector: 'hyper-score',
	templateUrl: './scores.component.html',
	styleUrls: [ './scores.component.scss' ]
} )
export class ScoresComponent implements OnInit, OnDestroy {

	public selectedTab = 0;
	public scores: Score[];
	private currentTab = this.selectedTab;
	private unsubscribe$ = new Subject<void>();

	constructor( private layoutService: LayoutService, private scoreStoreService: ScoreStoreService ) {
		this.layoutService.setTitle( 'Scores' );
		this.scoreStoreService.loadInitialData();
	}

	ngOnInit() {
		this.scoreStoreService.scores$.pipe( takeUntil( this.unsubscribe$ ) ).subscribe( scores => {
			this.scores = scores;
		} );
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	filterScores(): Score[] {
		let tempScores = this.scores.sort((a,b) => a.id - b.id);
		if ( this.currentTab === 0 ) {
			tempScores = tempScores.filter( score => score.match.status === MatchStatus.PLAYED && score.total_score === null );
		} else {
			tempScores = tempScores.filter(score => score.total_score !== null);
		}
		return tempScores;

	}

	onSelect( $event: MatTabChangeEvent ) {
		this.currentTab = $event.index;
	}

}
