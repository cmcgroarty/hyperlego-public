import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchRoutingModule } from './match-routing.module';
import { MatchesComponent } from './matches/matches.component';

@NgModule( {
	imports: [
		CommonModule,
		MatchRoutingModule,
		SharedModule
	],
	declarations: [ MatchListComponent, MatchesComponent, MatchDetailComponent ]
} )
export class MatchModule {
}
