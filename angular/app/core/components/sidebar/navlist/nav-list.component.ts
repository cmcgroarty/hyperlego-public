import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavItem } from '../../../../shared/model/nav-item.model';

@Component( {
	selector: 'hyper-nav-list',
	templateUrl: './nav-list.component.html',
	styleUrls: [ './nav-list.component.scss' ]
} )
export class NavListComponent implements OnInit {

	@Input() navs: NavItem[];
	@Output() closeSidenav = new EventEmitter<boolean>();

	constructor() {
	}

	ngOnInit() {
	}

}
