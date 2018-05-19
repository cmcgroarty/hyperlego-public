import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DjrequestComponent } from './djrequest/djrequest.component';
import { EditScoreComponent } from './score/edit-score/edit-score.component';
import { ScoresComponent } from './score/scores/scores.component';
import { ControlComponent } from './timer/control/control.component';
import { DisplayComponent } from './timer/display/display.component';

const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{
		path: 'score', children: [
			{ path: '', component: ScoresComponent },
			{ path: 'edit/:id', component: EditScoreComponent }

		]
	},
	{ path: 'djrequest', component: DjrequestComponent},
	{
		path: 'timer', children: [
			{ path: '', redirectTo: 'display', pathMatch: 'full' },
			{ path: 'display', component: DisplayComponent },
			{ path: 'control', component: ControlComponent }
		]
	},
	{ path: '**', redirectTo: 'dashboard' }
];

@NgModule( {
	imports: [ RouterModule.forChild( routes ) ],
	exports: [ RouterModule ]
} )
export class AdminRoutingModule {
}
