import {Component, Output, OnInit, EventEmitter, ViewEncapsulation} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {Observable} from "rxjs";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	LOGO = require('./Logo_2015.svg');
	@Output() closeSidenav = new EventEmitter<boolean>();

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {}


}
