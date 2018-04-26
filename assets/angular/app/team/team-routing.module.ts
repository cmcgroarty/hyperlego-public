import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TeamComponent} from "./team.component";
import {TeamsComponent} from "./teams/teams.component";
import {TeamDetailComponent} from "./team-detail/team-detail.component";

const routes: Routes = [
	{
		path: '',
		component: TeamComponent,
		children: [
			{path: ':id', component: TeamDetailComponent},
			{path: '', component: TeamsComponent}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TeamRoutingModule {
}
