import { ElementRef, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable( {
	providedIn: 'root'
} )
export class LayoutService {

	private title: string;
	private globalTitle: string;

	constructor( private titleService: Title ) {
		this.title = '';
		this.globalTitle = 'HYPER Lego | powered by iDesign Consulting';
		this._backButton = false;
	}

	private _sidenavContainer: ElementRef;

	get sidenavContainer(): ElementRef {
		return this._sidenavContainer;
	}

	set sidenavContainer( value: ElementRef ) {
		this._sidenavContainer = value;
	}

	private _sidenavContent: ElementRef;

	get sidenavContent(): ElementRef {
		return this._sidenavContent;
	}

	set sidenavContent( value: ElementRef ) {
		this._sidenavContent = value;
	}

	private _backButton: boolean;

	get backButton(): boolean {
		return this._backButton;
	}

	set backButton( value: boolean ) {
		this._backButton = value;
	}

	appTitle(): string {
		return this.title;
	}

	getTitle(): string {
		return this.titleService.getTitle();
	}

	setTitle( title: string ): void {
		this.title = title;
		this.titleService.setTitle( ( this.title === '' ? this.globalTitle : this.title + ' | ' + this.globalTitle ) );
	}


}
