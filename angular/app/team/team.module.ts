import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from "../shared/shared.module";

import {TeamRoutingModule} from "./team-routing.module";
import {TeamListComponent} from './team-list/team-list.component';
import {TeamDetailComponent} from './team-detail/team-detail.component';
import {TeamsComponent} from './teams/teams.component';

@NgModule({
	imports: [
		CommonModule,
		TeamRoutingModule,
		SharedModule
	],
	declarations: [TeamListComponent, TeamDetailComponent, TeamsComponent,]
})
export class TeamModule {
}
