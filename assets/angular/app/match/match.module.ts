import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatchComponent} from './match.component';
import {MatchListComponent} from './match-list/match-list.component';
import {MatchesComponent} from './matches/matches.component';
import {MatchRoutingModule} from "./match-routing.module";
import {SharedModule} from "../shared/shared.module";
import { MatchDetailComponent } from './match-detail/match-detail.component';

@NgModule({
	imports: [
		CommonModule,
		MatchRoutingModule,
		SharedModule
	],
	declarations: [MatchComponent, MatchListComponent, MatchesComponent, MatchDetailComponent]
})
export class MatchModule {
}
