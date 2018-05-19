import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'login/token',
		component: LoginComponent,
		data: { token: true }
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'game',
		component: GameComponent
	},
	{
		path: 'admin',
		canActivate: [ AuthGuard ],
		canActivateChild: [ AuthGuard ],
		loadChildren: '../admin/admin.module#AdminModule'
	},
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
		path: 'request',
		loadChildren: '../djrequest/djrequest.module#DJRequestModule'
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
