import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject } from 'rxjs/index';
import { switchMap, takeUntil } from 'rxjs/operators';
import { ScoreBackendService } from '../../../core/services/backend/score-backend.service';
import { LayoutService } from '../../../core/services/layout.service';
import { Score } from '../../../shared/model/score.model';
import { Table } from '../../../shared/model/table.enum';

@Component( {
	selector: 'hyper-edit-score',
	templateUrl: './edit-score.component.html',
	styleUrls: [ './edit-score.component.scss' ]
} )
export class EditScoreComponent implements OnInit, OnDestroy {

	public score: Score;
	private unsubscribe$ = new Subject<void>();

	constructor( private layoutService: LayoutService, private router: Router, private route: ActivatedRoute, private scoreBackendService: ScoreBackendService, private snackBar: MatSnackBar ) {
		this.score = {};
	}

	ngOnInit() {
		this.layoutService.forceSidenavClose = false;
		this.route.paramMap.pipe( switchMap( ( params: ParamMap ) => {
			return this.scoreBackendService.getScore( +params.get( 'id' ) );
		} ) ).pipe( takeUntil( this.unsubscribe$ ) ).subscribe( score => {
			this.score = score;
			this.layoutService.setTitle( 'Scoring ' + score.match.id + '.' + Table[score.table_name] + ' #' + score.team.id );
		} );
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	updateScore() {
		this.score.total_score = this.calculate();
		delete this.score.match;
		delete this.score.team;
		this.scoreBackendService.updateScore( this.score ).subscribe(score => {
			this.snackBar.open('Score Updated');
			this.router.navigate(['admin', 'score']);
		}, err => {
			console.log(err);
			this.snackBar.open('Something Went Wrong. Find Chris.');
		});
	}

	calculate() {
		let score = 0;
		if ( this.score ) {


			if ( this.score.score_openingdoors_dooropened ) {
				score += 15;
			}

			if ( this.score.score_cloud_sdcardup ) {
				score += 30;
			}

			if ( this.score.score_community_loopnottouching ) {
				score += 25;
			}

			if ( this.score.score_robotics_insertinstalled ) {
				score += 25;

				if ( this.score.score_robotics_loopnottouching ) {
					score += 30;
				}
			}

			if ( this.score.score_rightsenses_loopnottouching ) {
				score += 40;
			}

			if ( this.score.score_outsidethebox_model ) {
				if ( this.score.score_outsidethebox_bulb ) {
					score += 40;
				} else {
					score += 25;
				}
			}

			if ( this.score.score_remotecomm_sliderpulled ) {
				score += 40;
			}

			if ( this.score.score_searchengine_wheelspun ) {
				score += 15;

				if ( this.score.score_searchengine_loopremoved ) {
					score += 45;
				}
			}

			if ( this.score.score_sports_shottaken ) {
				score += 30;

				if ( this.score.score_sports_goal ) {
					score += 30;
				}
			}

			if ( this.score.score_engineering_basket ) {
				score += 30;

				if ( this.score.score_engineering_model ) {
					score += 15;
				}
			}

			if ( this.score.score_adapting_modelrotated ) {
				score += 15;
			}

			if ( this.score.score_apprenticeship_modelpresented ) {
				score += 20;

				if ( this.score.score_apprenticeship_touchingcircle ) {
					score += 15;
				}
			}

			if ( this.score.score_projectlearning_loops >= 1 ) {
				score += 10;
			}

			score += this.score.score_projectlearning_loops * 10;

			if ( this.score.score_engagement_yellowmoved ) {
				score += Math.round( score * ( ( this.score.score_engagement_dialcolor + this.score.score_engagement_ticks ) * 0.01 ) );
				score += 20;

			}

			score += this.score.score_penalties_junk * -10;
		}
		return Math.max( score, 0 );
	}
}
