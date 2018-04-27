import {NgModule} from '@angular/core';

import {
	MatButtonModule,
	MatMenuModule,
	MatToolbarModule,
	MatIconModule,
	MatCardModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatTabsModule,
	MatListModule
} from '@angular/material';

@NgModule({
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
	]
})
export class MaterialModule {
}
