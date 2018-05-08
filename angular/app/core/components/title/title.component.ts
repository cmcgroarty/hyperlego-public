import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component( {
	selector: 'app-title',
	templateUrl: './title.component.html',
	styleUrls: [ './title.component.scss' ]
} )
export class TitleComponent implements OnInit {

	constructor( private titleService: LayoutService ) {
	}

	ngOnInit() {
	}

	appTitle(): string {
		return this.titleService.appTitle();
	}

}
