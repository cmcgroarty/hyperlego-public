import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MatchesComponent} from "./matches/matches.component";
import {MatchDetailComponent} from "./match-detail/match-detail.component";

const routes: Routes = [
	{path: ':id', component: MatchDetailComponent},
	{path: '', component: MatchesComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MatchRoutingModule {
}
