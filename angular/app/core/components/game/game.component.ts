import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from '../../services/layout.service';

@Component( {
	selector: 'hyper-game',
	templateUrl: './game.component.html',
	styleUrls: [ './game.component.scss' ]
} )
export class GameComponent implements OnInit {

	public selectedTab: number;

	constructor(private route: ActivatedRoute, private layoutService: LayoutService) {
	}

	ngOnInit() {
		this.layoutService.setTitle( 'FLL World Class' );
		this.selectedTab = 0;
	}

}
