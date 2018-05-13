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
	MatTabsModule,
	MatToolbarModule
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
		MatListModule
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
		MatListModule
	],
	providers: [ {
		provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
		useValue: { duration: 2500, horizontalPosition: 'start', verticalPosition: 'bottom' }
	} ]
} )
export class MaterialModule {
}
