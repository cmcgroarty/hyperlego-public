import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { Subject } from 'rxjs';
import { LayoutService } from '../../core/services/layout.service';
import { TeamStoreService } from '../../core/services/team-store.service';
import { Division } from '../../shared/model/division.model';

@Component( {
	selector: 'hyper-teams',
	templateUrl: './teams.component.html',
	styleUrls: [ './teams.component.scss' ]
} )
export class TeamsComponent implements OnInit, OnDestroy {

	tabDivision: Division = undefined;
	selectedTab = 0;
	private unsubscribe$ = new Subject<void>();

	constructor( private layout: LayoutService, public todoStore: TeamStoreService ) {
	}

	ngOnInit() {
		this.layout.setTitle( 'Teams' );
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	onSelect( $event: MatTabChangeEvent ): void {
		switch ( $event.tab.textLabel ) {
			case 'JA':
				this.tabDivision = Division.JA;
				break;
			case 'JQA':
				this.tabDivision = Division.JQA;
				break;
			default:
				this.tabDivision = undefined;
				break;
		}
	}

}
