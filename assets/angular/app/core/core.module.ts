import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router'
import {CoreRoutingModule} from "./core-routing.module";
import {SharedModule} from "../shared/shared.module";
import {LoginComponent} from "./login/login.component";
import {NotFoundComponent} from './not-found/not-found.component';
import {SidebarComponent} from './sidebar/sidebar.component';

import {AuthGuard} from "./guards/auth.guard";
import {throwIfAlreadyLoaded} from "./guards/module-import.guard";


@NgModule({
	imports: [
		CommonModule,
		CoreRoutingModule,
		SharedModule
	],
	declarations: [LoginComponent, NotFoundComponent, SidebarComponent],
	exports: [
		RouterModule,
		SidebarComponent
	],
	providers: [AuthGuard]
})
export class CoreModule {
	constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
		throwIfAlreadyLoaded(parentModule, 'CoreModule');
	}
}
