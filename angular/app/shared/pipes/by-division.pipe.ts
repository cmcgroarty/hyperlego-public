import { Pipe, PipeTransform } from '@angular/core';
import { Division } from '../model/division.model';

@Pipe( {
	name: 'byDivision'
} )
export class ByDivisionPipe implements PipeTransform {

	transform( items: any[], division: Division ): any[] {
		if ( !items ) {
			return [];
		}
		if ( !division ) {
			return items;
		}
		return items.filter( item => {
			return ( Division[ item.division ] === division ) || ( item.division === division );
		} );
	}

}
