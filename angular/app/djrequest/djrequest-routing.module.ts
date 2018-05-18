import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanSubmitTrackGuard } from './can-submit-track.guard';
import { DJRequestComponent } from './djrequest.component';
import { SubmitRequestComponent } from './submit-request/submit-request.component';

const routes: Routes = [
	{ path: 'new', component: SubmitRequestComponent, canActivate: [CanSubmitTrackGuard] },
	{ path: '', component: DJRequestComponent }
];

@NgModule( {
	imports: [ RouterModule.forChild( routes ) ],
	exports: [ RouterModule ]
} )
export class DJRequestRoutingModule {
}
