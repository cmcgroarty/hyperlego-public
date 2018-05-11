import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CoreRoutingModule } from './core-routing.module';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';

@NgModule( {
	imports: [
		CommonModule,
		CoreRoutingModule,
		SharedModule,
		HttpClientModule
	],
	declarations: [ LoginComponent, NotFoundComponent, SidebarComponent, HomeComponent ],
	exports: [
		RouterModule,
		SidebarComponent
	]
} )
export class CoreModule {
	constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
		throwIfAlreadyLoaded( parentModule, 'CoreModule' );
	}
}
