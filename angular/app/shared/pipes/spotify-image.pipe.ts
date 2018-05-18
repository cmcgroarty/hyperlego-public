import { Pipe, PipeTransform } from '@angular/core';
import { APIService } from '../../core/services/api.service';

@Pipe( {
	name: 'spotifyImage'
} )
export class SpotifyImagePipe implements PipeTransform {

	constructor( private api: APIService ) {
	}

	transform( value: string, args?: any ): string {
		if ( !value ) {
			return '';
		} else {
			return value.replace( 'https://i.scdn.co/image', this.api.url + '/spotify/image' );
		}
	}

}
