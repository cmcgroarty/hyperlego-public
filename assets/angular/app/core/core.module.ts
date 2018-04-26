import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router'
import {CoreRoutingModule} from "./core-routing.module";
import {LoginComponent} from "./login/login.component";
import {NotFoundComponent} from './not-found/not-found.component';
import {SidebarComponent} from './sidebar/sidebar.component';

import {AuthGuard} from "./guards/auth.guard";


@NgModule({
	imports: [
		CommonModule,
		CoreRoutingModule
	],
	declarations: [LoginComponent, NotFoundComponent, SidebarComponent],
	exports: [
		RouterModule,
		SidebarComponent
	],
	providers: [AuthGuard]
})
export class CoreModule {
}
