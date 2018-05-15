import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component( {
	selector: 'hyper-about',
	templateUrl: './about.component.html',
	styleUrls: [ './about.component.scss' ]
} )
export class AboutComponent implements OnInit {

	constructor(private layoutService: LayoutService) {
	}

	ngOnInit() {
		this.layoutService.setTitle( 'About' );
	}

}
