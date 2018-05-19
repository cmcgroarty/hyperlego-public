import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DjrequestItemComponent } from './djrequest/djrequest-item/djrequest-item.component';
import { DjrequestListComponent } from './djrequest/djrequest-list/djrequest-list.component';
import { DjrequestComponent } from './djrequest/djrequest.component';
import { EditScoreComponent } from './score/edit-score/edit-score.component';
import { ScoreListComponent } from './score/score-list/score-list.component';
import { ScoresComponent } from './score/scores/scores.component';
import { ControlComponent } from './timer/control/control.component';
import { DisplayComponent } from './timer/display/display.component';

@NgModule( {
	imports: [
		CommonModule,
		AdminRoutingModule,
		SharedModule
	],
	declarations: [ DashboardComponent, ControlComponent, DisplayComponent, ScoresComponent, ScoreListComponent, EditScoreComponent, DjrequestComponent, DjrequestListComponent, DjrequestItemComponent ]
} )
export class AdminModule {
}
