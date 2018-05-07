import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ScoresComponent} from "./scores/scores.component";

const routes: Routes = [
	{path: '', component: ScoresComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ScoreRoutingModule {
}
