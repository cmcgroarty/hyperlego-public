import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { NavItem } from '../../../../shared/model/nav-item.model';
import { LayoutService } from '../../../services/layout.service';

@Component( {
	selector: 'hyper-nav-list',
	templateUrl: './nav-list.component.html',
	styleUrls: [ './nav-list.component.scss' ]
} )
export class NavListComponent implements OnInit {
	@HostBinding( 'class' ) hostClass = 'fullpage';
	@Input() navs: NavItem[];
	@Output() closeSidenav = new EventEmitter<boolean>();

	constructor(public layoutService: LayoutService) {
	}

	ngOnInit() {
	}

}
