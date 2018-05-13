import { inject, TestBed } from '@angular/core/testing';

import { ScoreBackendService } from './score-backend.service';

describe( 'ScoreBackendService', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			providers: [ ScoreBackendService ]
		} );
	} );

	it( 'should be created', inject( [ ScoreBackendService ], ( service: ScoreBackendService ) => {
		expect( service ).toBeTruthy();
	} ) );
} );
