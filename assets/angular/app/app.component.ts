import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {MatSidenavContent} from "@angular/material";
import {LayoutService} from "./core/services/layout.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	@ViewChild(MatSidenavContent,{read: ElementRef})
	public sidenavContainer: ElementRef;

	constructor(private layout:LayoutService){}

	ngOnInit(){
		this.layout.sidenavContainer = this.sidenavContainer;
	}
}
