import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	/*
	{
		path: 'admin',
		canActivate: [AuthGuard],
		loadChildren: '../admin/admin.module#AdminModule'
	},
	*/
	{
		path: 'team',
		loadChildren: '../team/team.module#TeamModule'
	},
	{
		path: 'match',
		loadChildren: '../match/match.module#MatchModule'
	},
	{
		path: 'score',
		loadChildren: '../score/score.module#ScoreModule'
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule( {
	imports: [ RouterModule.forRoot( routes ) ],
	exports: [ RouterModule ]
} )
export class CoreRoutingModule {
}
