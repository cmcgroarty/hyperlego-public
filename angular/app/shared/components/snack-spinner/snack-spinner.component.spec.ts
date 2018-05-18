import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackSpinnerComponent } from './snack-spinner.component';

describe( 'SnackSpinnerComponent', () => {
	let component: SnackSpinnerComponent;
	let fixture: ComponentFixture<SnackSpinnerComponent>;

	beforeEach( async( () => {
		TestBed.configureTestingModule( {
			declarations: [ SnackSpinnerComponent ]
		} )
			.compileComponents();
	} ) );

	beforeEach( () => {
		fixture = TestBed.createComponent( SnackSpinnerComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should create', () => {
		expect( component ).toBeTruthy();
	} );
} );
