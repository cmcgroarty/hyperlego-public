import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MatchComponent} from "./match.component";
import {MatchesComponent} from "./matches/matches.component";
import {MatchDetailComponent} from "./match-detail/match-detail.component";

const routes: Routes = [
	{
		path: '',
		component: MatchComponent,
		children: [
			{path: ':id', component: MatchDetailComponent},
			{path: '', component: MatchesComponent}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MatchRoutingModule {
}
