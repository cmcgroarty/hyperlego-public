import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamComponent} from './team.component';
import {TeamListComponent} from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [TeamComponent, TeamListComponent, TeamDetailComponent, TeamsComponent]
})
export class TeamModule {
}
