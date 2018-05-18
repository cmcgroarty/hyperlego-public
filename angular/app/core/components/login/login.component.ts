import { Component, HostBinding, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LayoutService } from '../../services/layout.service';

@Component( {
	selector: 'hyper-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
} )
export class LoginComponent implements OnInit {

	@HostBinding( 'class' ) hostClass = 'fullpage';
	public loginForm: FormGroup;
	public isWaiting = false;
	public loginMessage = null;
	public loginResponseType: string;

	private return: string[];

	constructor(
		private layoutService: LayoutService,
		private authService: AuthService,
		private router: Router,
		private route: ActivatedRoute,
		private fb: FormBuilder,
		private snackBar: MatSnackBar
	) {
		this.buildForm();
		this.loginResponseType = 'message ';
	}

	get username(): AbstractControl {
		return this.loginForm.get( 'username' );
	}

	get password(): AbstractControl {
		return this.loginForm.get( 'password' );
	}

	ngOnInit() {
		this.layoutService.setTitle( 'Login' );
		this.layoutService.forceSidenavClose = true;
		this.layoutService.hideToolbar = true;


		this.route.queryParams.subscribe( params => {
			this.return = [ params.return ] || [ 'admin', 'dashboard' ];
		} );

		if ( this.authService.isAuthenticated() ) {
			this.router.navigate( this.return );
		}
	}

	buildForm() {
		this.loginForm = this.fb.group( {
			username: [ '', [ Validators.required, Validators.pattern( '^[a-z0-9_-]{3,25}$' ) ] ],
			password: [ '', [ Validators.required ] ]
		} );
	}

	login() {
		this.isWaiting = true;
		this.authService.login( this.username.value, this.password.value ).subscribe( loginAttempt => {
			if ( !loginAttempt.waiting ) {
				this.isWaiting = false;
				this.loginMessage = loginAttempt.message;
				this.loginResponseType = loginAttempt.success ? 'success' : 'warn';
				if ( loginAttempt.success ) {
					this.snackBar.open( loginAttempt.message );
					this.router.navigate( this.return );
				}
			}
		} );
	}

}
