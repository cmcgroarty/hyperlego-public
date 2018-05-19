import { NgModule } from '@angular/core';

import {
	MAT_SNACK_BAR_DEFAULT_OPTIONS,
	MatButtonModule,
	MatCardModule,
	MatChipsModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatTabsModule,
	MatToolbarModule,
	MatRadioModule
} from '@angular/material';

@NgModule( {
	imports: [
		MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatSidenavModule,
		MatSnackBarModule,
		MatTabsModule,
		MatListModule,
		MatProgressSpinnerModule,
		MatProgressBarModule,
		MatInputModule,
		MatGridListModule,
		MatChipsModule,
		MatRadioModule
	],
	exports: [
		MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatSidenavModule,
		MatSnackBarModule,
		MatTabsModule,
		MatListModule,
		MatProgressSpinnerModule,
		MatProgressBarModule,
		MatInputModule,
		MatGridListModule,
		MatChipsModule,
		MatRadioModule
	],
	providers: [ {
		provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
		useValue: { duration: 2500, horizontalPosition: 'end', verticalPosition: 'bottom' }
	} ]
} )
export class MaterialModule {
}
