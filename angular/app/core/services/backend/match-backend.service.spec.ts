import { inject, TestBed } from '@angular/core/testing';

import { MatchBackendService } from './match-backend.service';

describe( 'MatchBackendService', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			providers: [ MatchBackendService ]
		} );
	} );

	it( 'should be created', inject( [ MatchBackendService ], ( service: MatchBackendService ) => {
		expect( service ).toBeTruthy();
	} ) );
} );
