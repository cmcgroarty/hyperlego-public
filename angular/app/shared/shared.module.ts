import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { MomentModule } from 'ngx-moment';

import { OrderModule } from 'ngx-order-pipe';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { MaterialModule } from './material/material.module';
import { ByDivisionPipe } from './pipes/by-division.pipe';
import { TimerColorPipe } from './pipes/timer-color.pipe';

@NgModule( {
	imports: [
		MaterialModule,
		FlexLayoutModule,
		OrderModule,
		MomentModule,
		NgxPageScrollModule
	],
	exports: [
		MaterialModule,
		FlexLayoutModule,
		OrderModule,
		MomentModule,
		NgxPageScrollModule,
		ByDivisionPipe,
		TimerColorPipe
	],
	declarations: [ ByDivisionPipe, TimerColorPipe ],
	providers: [ ByDivisionPipe, TimerColorPipe]
} )
export class SharedModule {
}
