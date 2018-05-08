import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragScrollModule } from 'ngx-drag-scroll';
import { MomentModule } from 'ngx-moment';

import { OrderModule } from 'ngx-order-pipe';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { MaterialModule } from './material/material.module';
import { ByDivisionPipe } from './pipes/by-division.pipe';

@NgModule( {
	imports: [
		MaterialModule,
		FlexLayoutModule,
		OrderModule,
		MomentModule,
		NgxPageScrollModule,
		DragScrollModule
	],
	exports: [
		MaterialModule,
		FlexLayoutModule,
		OrderModule,
		MomentModule,
		NgxPageScrollModule,
		DragScrollModule,
		ByDivisionPipe
	],
	declarations: [ ByDivisionPipe ],
	providers: [ ByDivisionPipe ],
} )
export class SharedModule {
}
