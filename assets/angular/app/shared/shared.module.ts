import {NgModule} from '@angular/core';
import {MaterialModule} from './material/material.module';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ByDivisionPipe} from './pipes/by-division.pipe';

import {OrderModule} from "ngx-order-pipe";

@NgModule({
	imports: [
		MaterialModule,
		FlexLayoutModule,
		OrderModule
	],
	exports: [
		MaterialModule,
		FlexLayoutModule,
		OrderModule,
		ByDivisionPipe
	],
	declarations: [ByDivisionPipe]
})
export class SharedModule {
}
