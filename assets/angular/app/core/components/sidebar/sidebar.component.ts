import {Component, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	LOGO = require('./Logo_2015.svg');
	@Output() closeSidenav = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}




}
