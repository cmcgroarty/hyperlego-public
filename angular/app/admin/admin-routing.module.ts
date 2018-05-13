import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../core/components/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlComponent } from './timer/control/control.component';
import { DisplayComponent } from './timer/display/display.component';

const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
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
