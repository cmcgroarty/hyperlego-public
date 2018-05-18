import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component( {
	selector: 'hyper-track-search',
	templateUrl: './track-search.component.html',
	styleUrls: [ './track-search.component.scss' ]
} )
export class TrackSearchComponent {
	@HostBinding( 'class' ) hostClass = 'fullpage';
	@Output() lookupTerm = new EventEmitter<string>();
	term = new FormControl();

	constructor() {
		this.term.valueChanges.pipe( debounceTime( 600 ) ).subscribe( value => {
			this.lookupTerm.emit( value );
		} );
	}

}
