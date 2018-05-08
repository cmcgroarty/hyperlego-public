import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { LayoutService } from '../../core/services/layout.service';
import { ScoreService } from '../../core/services/score.service';
import { Score } from '../../shared/model/score.model';

@Component( {
	selector: 'app-scores',
	templateUrl: './scores.component.html',
	styleUrls: [ './scores.component.scss' ]
} )
export class ScoresComponent implements OnInit, OnDestroy {

	scores$: Observable<Score[]>;
	tabFilter: String = '';
	selectedTab: number = 0;
	private unsubscribe$ = new Subject<void>();

	constructor( private layout: LayoutService, private service: ScoreService ) {
	}

	ngOnInit(): void {
		this.layout.setTitle( 'Scores' );
		this.scores$ = this.service.getAllScores();
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	onSelect( $event: MatTabChangeEvent ): void {
	}

}
