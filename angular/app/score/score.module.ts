import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoresComponent } from './scores/scores.component';
import { ScoreListComponent } from './score-list/score-list.component';
import { ScoreComponent } from './score.component';
import {SharedModule} from "../shared/shared.module";
import {ScoreRoutingModule} from "./score-routing.module";

@NgModule({
  imports: [
    CommonModule,
		ScoreRoutingModule,
		SharedModule
  ],
  declarations: [ScoresComponent, ScoreListComponent, ScoreComponent]
})
export class ScoreModule { }
