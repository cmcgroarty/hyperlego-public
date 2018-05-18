import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DJRequest } from '../../../shared/model/dj-request.model';
import { APIService } from '../api.service';

@Injectable( {
	providedIn: 'root'
} )
export class DJRequestBackendService {

	constructor( private http: HttpClient, private api: APIService ) {
	}

	getAllRequests(): Observable<DJRequest[]> {
		return this.http.get<DJRequest[]>( this.api.url + '/djrequest' );
	}

	getRequest( id: number ): Observable<DJRequest> {
		return this.http.get<DJRequest>( this.api.url + '/djrequest/' + id );
	}

	createRequest( request: DJRequest ): Observable<DJRequest> {
		return this.http.post( this.api.url + '/djrequest/', request );
	}

	updateRequest( request: DJRequest ): Observable<DJRequest> {
		return this.http.put( this.api.url + '/djrequest/' + request.id, request );
	}

	deleteRequest( id: number ): Observable<Object> {
		return this.http.delete( this.api.url + '/djrequest/' + id );
	}
}
