import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchDetailComponent } from './match-detail/match-detail.component';

import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [
	{ path: ':id', component: MatchDetailComponent },
	{ path: '', component: MatchesComponent }
];

@NgModule( {
	imports: [ RouterModule.forChild( routes ) ],
	exports: [ RouterModule ]
} )
export class MatchRoutingModule {
}
