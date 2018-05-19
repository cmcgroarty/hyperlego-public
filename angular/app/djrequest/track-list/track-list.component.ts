import { Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TrackObjectFull } from 'spotify_api';
import { LayoutService } from '../../core/services/layout.service';
import { ScreenSize } from '../../shared/model/screen-size.enum';

@Component( {
	selector: 'hyper-track-list',
	templateUrl: './track-list.component.html',
	styleUrls: [ './track-list.component.scss' ],
	encapsulation: ViewEncapsulation.None
} )
export class TrackListComponent implements OnInit {
	@HostBinding( 'class' ) hostClass = 'fullpage';
	@Input() tracks$: Observable<TrackObjectFull[]>;
	@Output() selectTrack = new EventEmitter<TrackObjectFull>();
	public numColumns = 1;

	constructor( private layoutService: LayoutService ) {
	}

	ngOnInit() {
		this.layoutService.screenSize$.subscribe(screensize => {
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
		});
	}
}
