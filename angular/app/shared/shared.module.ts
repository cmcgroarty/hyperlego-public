import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'ngx-moment';

import { OrderModule } from 'ngx-order-pipe';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { CurrentMatchToolbarComponent } from './components/current-match-toolbar/current-match-toolbar.component';
import { SnackSpinnerComponent } from './components/snack-spinner/snack-spinner.component';
import { MaterialModule } from './material/material.module';
import { ByDivisionPipe } from './pipes/by-division.pipe';
import { TimerColorPipe } from './pipes/timer-color.pipe';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { ScoreTableDisplayComponent } from './components/score-table-display/score-table-display.component';


@NgModule( {
	imports: [
		CommonModule,
		MaterialModule,
		FlexLayoutModule,
		OrderModule,
		MomentModule,
		NgxPageScrollModule,
		PdfViewerModule
	],
	exports: [
		MaterialModule,
		FlexLayoutModule,
		OrderModule,
		MomentModule,
		NgxPageScrollModule,
		PdfViewerModule,
		CurrentMatchToolbarComponent,
		ScoreTableDisplayComponent,
		ByDivisionPipe,
		TimerColorPipe
	],
	declarations: [ ByDivisionPipe, TimerColorPipe, SnackSpinnerComponent, CurrentMatchToolbarComponent, ScoreTableDisplayComponent ],
	providers: [ ByDivisionPipe, TimerColorPipe ],
	entryComponents: [ SnackSpinnerComponent ]
} )
export class SharedModule {
}
