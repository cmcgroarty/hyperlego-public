import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailComponent } from './team-detail/team-detail.component';

import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
	{ path: ':id', component: TeamDetailComponent },
	{ path: '', component: TeamsComponent }
];

@NgModule( {
	imports: [ RouterModule.forChild( routes ) ],
	exports: [ RouterModule ]
} )
export class TeamRoutingModule {
}
