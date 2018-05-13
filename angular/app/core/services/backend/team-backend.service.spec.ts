import { inject, TestBed } from '@angular/core/testing';

import { TeamBackendService } from './team-backend.service';

describe( 'TeamBackendService', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			providers: [ TeamBackendService ]
		} );
	} );

	it( 'should be created', inject( [ TeamBackendService ], ( service: TeamBackendService ) => {
		expect( service ).toBeTruthy();
	} ) );
} );
