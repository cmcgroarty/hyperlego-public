import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	private LOGO = require('./Logo_2015.svg');

  constructor() { }

  ngOnInit() {
  }

}
