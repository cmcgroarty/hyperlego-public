import { Component, Input } from '@angular/core';
import { SailsSocketService } from '../../../core/services/sails-socket.service';
import { Match } from '../../model/match.model';

@Component( {
	selector: 'hyper-current-match-toolbar',
	templateUrl: './current-match-toolbar.component.html',
	styleUrls: [ './current-match-toolbar.component.scss' ]
} )
export class CurrentMatchToolbarComponent {

	@Input() currentMatch: Match;

	constructor( public sailsSocketService: SailsSocketService ) {
	}

}
