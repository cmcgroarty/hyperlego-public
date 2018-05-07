import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScoresComponent} from './scores/scores.component';
import {ScoreListComponent} from './score-list/score-list.component';
import {SharedModule} from "../shared/shared.module";
import {ScoreRoutingModule} from "./score-routing.module";

@NgModule({
	imports: [
		CommonModule,
		ScoreRoutingModule,
		SharedModule
	],
	declarations: [ScoresComponent, ScoreListComponent]
})
export class ScoreModule {
}
