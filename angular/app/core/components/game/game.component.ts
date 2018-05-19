import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from '../../services/layout.service';

@Component( {
	selector: 'hyper-game',
	templateUrl: './game.component.html',
	styleUrls: [ './game.component.scss' ]
} )
export class GameComponent implements OnInit {

	public selectedTab = 0;
	public pdfURL = 'assets/pdf/fllworldclass_therules.pdf';

	constructor( private route: ActivatedRoute, private layoutService: LayoutService ) {
	}

	ngOnInit() {
		this.layoutService.setTitle( 'FLL World Class' );
		this.selectedTab = 0;
	}

	onSelect( $event: MatTabChangeEvent ) {
		switch ( $event.index ) {
			case 1:
				this.pdfURL = 'assets/pdf/fllworldclass_theproject.pdf';
				break;
			case 2:
				this.pdfURL = 'assets/pdf/fllworldclass_themissions.pdf';
				break;
			default:
				this.pdfURL = 'assets/pdf/fllworldclass_therules.pdf';
				break;
		}
	}

}
