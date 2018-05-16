import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SailsService } from 'angular2-sails';
import { Observable } from 'rxjs/internal/Observable';
import { JWR } from '../../../shared/model/jwr.model';
import { Timer } from '../../../shared/model/timer.model';
import { APIService } from '../api.service';

@Injectable( {
	providedIn: 'root'
} )
export class TimerBackendService {

	constructor( private http: HttpClient, private api: APIService, private sailsService: SailsService ) {

	}

	getTimer(): Observable<JWR<Timer>> {
		return this.sailsService.post(this.api.prefix + '/timer/');
	}

	startTimer(): Observable<Timer> {
		return this.http.post<Timer>( this.api.url + '/timer/control/start/', {});
	}

	stopTimer(): Observable<Timer> {
		return this.http.post<Timer>( this.api.url + '/timer/control/stop/', {});
	}

	resetTimer(): Observable<Timer> {
		return this.http.post<Timer>( this.api.url + '/timer/control/reset/', {});
	}
}
