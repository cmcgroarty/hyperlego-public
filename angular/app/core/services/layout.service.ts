import { Injectable } from '@angular/core';
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
