import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SailsService } from 'angular2-sails';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { JWR } from '../../../shared/model/jwr.model';
import { Timer } from '../../../shared/model/timer.model';
import { APIService } from '../api.service';
import { SailsSocketService } from '../sails-socket.service';

@Injectable( {
	providedIn: 'root'
} )
export class TimerBackendService {

	constructor(
		private http: HttpClient,
		private api: APIService,
		private sailsService: SailsService,
		private sailsSocketService: SailsSocketService
	) {

	}

	getTimer(): Observable<JWR<Timer>> {
		return this.sailsService.post( this.api.prefix + '/timer/' ).pipe( tap( () => {
		}, this.sailsSocketService.socketErrorHandler ) );
	}

	startTimer(): Observable<Timer> {
		return this.http.post<Timer>( this.api.url + '/timer/control/start/', {} ).pipe( tap( () => {
		}, this.sailsSocketService.socketErrorHandler ) );
	}

	stopTimer(): Observable<Timer> {
		return this.http.post<Timer>( this.api.url + '/timer/control/stop/', {} ).pipe( tap( () => {
		}, this.sailsSocketService.socketErrorHandler ) );
	}

	resetTimer(): Observable<Timer> {
		return this.http.post<Timer>( this.api.url + '/timer/control/reset/', {} ).pipe( tap( () => {
		}, this.sailsSocketService.socketErrorHandler ) );
	}

	errorHandler( err ) {

	}
}
