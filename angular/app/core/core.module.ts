import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SailsModule, SailsService } from 'angular2-sails';
import { CookieModule, CookieService } from 'ngx-cookie';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavListComponent } from './components/sidebar/navlist/nav-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CoreRoutingModule } from './core-routing.module';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';

@NgModule( {
	imports: [
		CommonModule,
		CoreRoutingModule,
		SharedModule,
		HttpClientModule,
		SailsModule,
		CookieModule.forRoot(),
	],
	declarations: [ LoginComponent, NotFoundComponent, SidebarComponent, HomeComponent, NavListComponent, AboutComponent, GameComponent, ],
	exports: [
		RouterModule,
		SidebarComponent,
	],
	providers: [ SailsService ]
} )
export class CoreModule {
	constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
		throwIfAlreadyLoaded( parentModule, 'CoreModule' );
	}
}
