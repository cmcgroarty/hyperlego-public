import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
import { UserRole } from '../../shared/model/user-role.enum';
import { APIService } from './api.service';

@Injectable( {
	providedIn: 'root'
} )
export class AuthService implements OnInit {

	private readonly loginHttpOptions = {
		headers: new HttpHeaders( {} ),
		// credentials: 'include',
		withCredentials: true
	};
	private _me$: BehaviorSubject<any> = new BehaviorSubject<any>( undefined );
	public readonly me$ = this._me$.asObservable();
	private _loginAttempt$: BehaviorSubject<any> = new BehaviorSubject<any>( { waiting: true } );

	constructor(
		private http: HttpClient,
		private api: APIService,
		private cookieService: CookieService,
		private router: Router
	) {

	}

	ngOnInit() {
		this.http.post<any>( this.api.url + '/auth/me', {} ).subscribe( response => {
			console.log( response );
			this._me$.next( response.me );
		} );
	}

	login( username: string, password: string ): Observable<any> {
		this.http.post<any>( this.api.url + '/auth/login', {
			username: username,
			password: password
		}, this.loginHttpOptions ).subscribe( success => {
			this._me$.next( success.me );
			this._loginAttempt$.next( { waiting: false, success: true, message: success.message } );
		}, error => {
			let message = 'Unknown Error';
			switch ( error.status ) {
				case 0:
					message = 'Unknown Error';
					break;
				case 500:
					message = 'Server Error. Please Try Again.';
					break;
				default:
					message = error.error.message;
					break;

			}
			this._loginAttempt$.next( { waiting: false, success: false, message: message } );
		} );

		return this._loginAttempt$.asObservable();
	}

	logout() {
		this.clearJwtCookie();
		this.http.get<any>( this.api.url + '/auth/logout' ).subscribe( () => {
			this.router.navigate( [ 'login' ] );
			this._me$.next( undefined );
		} );
	}

	isAuthenticated(): boolean {
		return !!this._me$.getValue() || !!this.cookieService.get( environment.cookie.hyperlego_jwt.key );
	}

	isAuthorized( roles: UserRole[] ): boolean {
		return false;
	}

	clearJwtCookie() {
		this.cookieService.remove( environment.cookie.hyperlego_jwt.key );
	}

	intercept401() {
		this.clearJwtCookie();
		this.router.navigate( [ 'login' ] );
	}
}
