import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router'
import {HttpClientModule} from "@angular/common/http";
import {CoreRoutingModule} from "./core-routing.module";
import {SharedModule} from "../shared/shared.module";
import {LoginComponent} from "./components/login/login.component";
import {NotFoundComponent} from './components/not-found/not-found.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {TeamService} from "./services/team.service";
import {TitleService} from "./services/title.service";
import {AuthGuard} from "./guards/auth.guard";
import {throwIfAlreadyLoaded} from "./guards/module-import.guard";
import {TitleComponent} from './components/title/title.component';
import {HomeComponent} from './components/home/home.component';


@NgModule({
	imports: [
		CommonModule,
		CoreRoutingModule,
		SharedModule,
		HttpClientModule
	],
	declarations: [LoginComponent, NotFoundComponent, SidebarComponent, TitleComponent, HomeComponent],
	exports: [
		RouterModule,
		SidebarComponent,
		TitleComponent
	],
	providers: [AuthGuard, TitleService, TeamService]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		throwIfAlreadyLoaded(parentModule, 'CoreModule');
	}
}
