import { SpotifyImagePipe } from './spotify-image.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe( 'SpotifyImagePipe', () => {
	it( 'create an instance', () => {
		// TODO: inject API service into pipe?
		// https://stackoverflow.com/questions/47514436/test-pipe-with-dependencies-on-services
		// @ts-ignore
		const pipe = new SpotifyImagePipe();
		expect( pipe ).toBeTruthy();
	} );
} );
