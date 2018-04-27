import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full'
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
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class CoreRoutingModule { }
