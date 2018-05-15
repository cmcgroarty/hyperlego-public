import { NgModule } from '@angular/core';

import {
	MAT_SNACK_BAR_DEFAULT_OPTIONS,
	MatButtonModule,
	MatCardModule,
	MatIconModule,
	MatListModule,
	MatMenuModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatProgressSpinnerModule,
	MatTabsModule,
	MatToolbarModule,
	SimpleSnackBar
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
		MatProgressSpinnerModule
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
		MatProgressSpinnerModule
	],
	providers: [ {
		provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
		useValue: { duration: 2500, horizontalPosition: 'start', verticalPosition: 'bottom' }
	} ]
} )
export class MaterialModule {
}
