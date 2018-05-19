import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LayoutService } from '../../../core/services/layout.service';
import { DJRequest } from '../../../shared/model/dj-request.model';
import { ScreenSize } from '../../../shared/model/screen-size.enum';

@Component( {
	selector: 'hyper-djrequest-list',
	templateUrl: './djrequest-list.component.html',
	styleUrls: [ './djrequest-list.component.scss' ]
} )
export class DjrequestListComponent implements OnInit {
	@Input() tracks$: Observable<DJRequest[]>;
	public numColumns = 1;

	constructor( private layoutService: LayoutService ) {
	}

	ngOnInit() {
		this.layoutService.screenSize$.subscribe( screensize => {
			switch ( screensize ) {
				case ScreenSize.XSMALL:
					this.numColumns = 1;
					break;
				case ScreenSize.SMALL:
					this.numColumns = 2;
					break;
				case ScreenSize.MEDIUM:
					this.numColumns = 2;
					break;
				case ScreenSize.LARGE:
					this.numColumns = 3;
					break;
				case ScreenSize.XLARGE:
					this.numColumns = 4;
					break;
				default:
					this.numColumns = 2;
					break;
			}
		} );
	}

}
