import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MomentModule } from 'ngx-moment';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { CurrentMatchToolbarComponent } from './components/current-match-toolbar/current-match-toolbar.component';
import { ScoreTableDisplayComponent } from './components/score-table-display/score-table-display.component';
import { SnackSpinnerComponent } from './components/snack-spinner/snack-spinner.component';
import { MaterialModule } from './material/material.module';
import { ByDivisionPipe } from './pipes/by-division.pipe';
import { SpotifyImagePipe } from './pipes/spotify-image.pipe';
import { TimerColorPipe } from './pipes/timer-color.pipe';


@NgModule( {
	imports: [
		CommonModule,
		FormsModule,
		MaterialModule,
		FlexLayoutModule,
		OrderModule,
		MomentModule,
		ReactiveFormsModule,
		NgxPageScrollModule,
		PdfViewerModule
	],
	exports: [
		MaterialModule,
		FormsModule,
		FlexLayoutModule,
		OrderModule,
		MomentModule,
		NgxPageScrollModule,
		PdfViewerModule,
		ReactiveFormsModule,
		CurrentMatchToolbarComponent,
		ScoreTableDisplayComponent,
		ByDivisionPipe,
		TimerColorPipe,
		SpotifyImagePipe
	],
	declarations: [
		ByDivisionPipe,
		TimerColorPipe,
		SnackSpinnerComponent,
		CurrentMatchToolbarComponent,
		ScoreTableDisplayComponent,
		SpotifyImagePipe
	],
	providers: [ ByDivisionPipe, TimerColorPipe, SpotifyImagePipe ],
	entryComponents: [ SnackSpinnerComponent ]
} )
export class SharedModule {
}
