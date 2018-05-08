import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamListComponent } from './team-list/team-list.component';

import { TeamRoutingModule } from './team-routing.module';
import { TeamsComponent } from './teams/teams.component';

@NgModule( {
	imports: [
		CommonModule,
		TeamRoutingModule,
		SharedModule
	],
	declarations: [ TeamListComponent, TeamDetailComponent, TeamsComponent, ]
} )
export class TeamModule {
}
