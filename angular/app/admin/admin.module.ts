import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlComponent } from './timer/control/control.component';
import { DisplayComponent } from './timer/display/display.component';

@NgModule( {
	imports: [
		CommonModule,
		AdminRoutingModule,
		SharedModule
	],
	declarations: [ DashboardComponent,  ControlComponent, DisplayComponent ]
} )
export class AdminModule {
}
