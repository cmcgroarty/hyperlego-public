import {Component, Output, OnInit, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {

	LOGO = require('./Logo_2015.svg');
	@Output() closeSidenav = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}




}
