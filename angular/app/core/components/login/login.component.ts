import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component( {
	selector: 'hyper-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
} )
export class LoginComponent implements OnInit {

	constructor(private layoutService: LayoutService) {
	}

	ngOnInit() {
		this.layoutService.setTitle( 'Login' );
	}

}
