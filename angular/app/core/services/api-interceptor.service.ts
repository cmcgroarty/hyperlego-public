import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

@Injectable( {
	providedIn: 'root'
} )
export class ApiInterceptorService {

	constructor( private injector: Injector, private router: Router ) {
	}

	intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
		return next.handle( request ).pipe( tap( ( event: HttpEvent<any> ) => {
			if ( event instanceof HttpResponse ) {
				// do stuff with response if you want
			}
		}, ( err: any ) => {
			if ( err instanceof HttpErrorResponse ) {
				if ( err.status === 401 ) {
					this.router.navigate( [ '/login/token' ] );
				}
			}
		} ) );
	}

}
