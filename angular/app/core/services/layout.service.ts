import {ElementRef, Injectable} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Injectable({
	providedIn: 'root'
})
export class LayoutService{
	private title:string;
	private globalTitle:string;
	private _sidenav:ElementRef;
	private _sidenavContainer:ElementRef;

  constructor(private titleService:Title) {
  	this.title = '';
  	this.globalTitle = 'HYPER Lego | powered by iDesign Consulting';
	}

	appTitle():string{
		return this.title;
	}

	getTitle():string{
  	return this.titleService.getTitle();
	}

	setTitle(title:string):void{
  	this.title = title;
		this.titleService.setTitle((this.title === '' ? this.globalTitle : this.title+' | '+this.globalTitle));
	}

	get sidenav(): ElementRef {
		return this._sidenav;
	}

	set sidenav(value: ElementRef) {
		this._sidenav = value;
	}
	get sidenavContainer(): ElementRef {
		return this._sidenavContainer;
	}

	set sidenavContainer(value: ElementRef) {
		this._sidenavContainer = value;
	}



}
