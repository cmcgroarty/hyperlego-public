import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ScoreListComponent } from './score-list/score-list.component';
import { ScoreRoutingModule } from './score-routing.module';
import { ScoresComponent } from './scores/scores.component';

@NgModule( {
	imports: [
		CommonModule,
		ScoreRoutingModule,
		SharedModule
	],
	declarations: [ ScoresComponent, ScoreListComponent ]
} )
export class ScoreModule {
}
