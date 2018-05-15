import { Component, OnInit } from '@angular/core';

@Component( {
	selector: 'hyper-game',
	templateUrl: './game.component.html',
	styleUrls: [ './game.component.scss' ]
} )
export class GameComponent implements OnInit {

	public selectedTab: number;

	constructor() {
	}

	ngOnInit() {
		this.selectedTab = 0;
	}

}
