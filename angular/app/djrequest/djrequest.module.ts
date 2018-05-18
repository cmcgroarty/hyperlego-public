import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DJRequestRoutingModule } from './djrequest-routing.module';
import { DJRequestComponent } from './djrequest.component';
import { SubmitRequestComponent } from './submit-request/submit-request.component';
import { TrackItemComponent } from './track-item/track-item.component';
import { TrackListComponent } from './track-list/track-list.component';
import { TrackSearchComponent } from './track-search/track-search.component';

@NgModule( {
	imports: [
		CommonModule,
		DJRequestRoutingModule,
		SharedModule
	],
	declarations: [ TrackSearchComponent, TrackListComponent, TrackItemComponent, DJRequestComponent, SubmitRequestComponent ]
} )
export class DJRequestModule {
}
