import {NgModule} from '@angular/core';
import {MaterialModule} from './material/material.module';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ByDivisionPipe} from './pipes/by-division.pipe';

import {OrderModule} from "ngx-order-pipe";
import {MomentModule, TimeAgoPipe} from "ngx-moment";
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
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
	declarations: [ByDivisionPipe],
	providers: [ByDivisionPipe],
})
export class SharedModule {
}
