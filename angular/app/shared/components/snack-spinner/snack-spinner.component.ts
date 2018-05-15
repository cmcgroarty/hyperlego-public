import { Component, HostBinding, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component( {
	selector: 'hyper-snack-spinner',
	templateUrl: './snack-spinner.component.html',
	styleUrls: [ './snack-spinner.component.scss' ],
	encapsulation: ViewEncapsulation.None
} )
export class SnackSpinnerComponent {
	@HostBinding( 'class' ) hostClass = 'mat-simple-snackbar';
	constructor( @Inject( MAT_SNACK_BAR_DATA ) public data: string ) {
	}
}


