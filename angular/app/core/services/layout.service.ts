import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GuardsCheckEnd, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs/index';
import { filter, takeUntil } from 'rxjs/operators';
import { NavItem } from '../../shared/model/nav-item.model';
import { NavType } from '../../shared/model/nav-type.model';

@Injectable( {
	providedIn: 'root'
} )
export class LayoutService implements OnDestroy {
	private title: string;
	private globalTitle: string;
	private currentNav: NavType;
	private navAdmin: NavItem[];
	private navPublic: NavItem[];
	private unsubscribe$ = new Subject<void>();

	constructor( private titleService: Title, private router: Router, private breakpointObserver: BreakpointObserver ) {
		this.globalTitle = 'HYPER Lego | powered by iDesign Consulting';
		this.setDefaultLayout();
		this.initializeNavs();
		this.setNav( NavType.PUBLIC );
		this.routerEventSubscribers();
		this.breakpointSubscriber();
	}

	private _isHandset: boolean;

	get isHandset(): boolean {
		return this._isHandset;
	}

	private _nav: NavItem[];

	get nav(): NavItem[] {
		return this._nav;
	}

	private _hideToolbar: boolean;

	get hideToolbar(): boolean {
		return this._hideToolbar;
	}

	set hideToolbar( value: boolean ) {
		this._hideToolbar = value;
	}

	private _forceSidenavClose: boolean;

	get forceSidenavClose(): boolean {
		return this._forceSidenavClose;
	}

	set forceSidenavClose( value: boolean ) {
		this._forceSidenavClose = value;
	}

	private _scrollContainer: ElementRef;

	get scrollContainer(): ElementRef {
		return this._scrollContainer;
	}

	set scrollContainer( value: ElementRef ) {
		this._scrollContainer = value;
	}

	private _backButton: boolean;

	get backButton(): boolean {
		return this._backButton;
	}

	set backButton( value: boolean ) {
		this._backButton = value;
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	isAdmin(): boolean {
		return this.currentNav === NavType.ADMIN;
	}

	setNav( navtype: NavType ) {
		this.currentNav = navtype;
		switch ( this.currentNav ) {
			case NavType.ADMIN:
				this._nav = this.navAdmin;
				break;
			default:
				this._nav = this.navPublic;
				break;
		}
	}

	appTitle(): string {
		return this.title;
	}

	getTitle(): string {
		return this.titleService.getTitle();
	}

	setTitle( title: string ): void {
		this.title = title;
		this.titleService.setTitle( ( this.title === '' ? this.globalTitle : this.title + ' | ' + this.globalTitle ) );
	}

	initializeNavs() {
		this.navPublic = [
			{
				order: 0,
				route: '/',
				title: 'Home',
				icon: 'home'
			},
			{
				order: 10,
				route: '/game',
				title: 'This Year\'s Challenge',
				icon: 'toys'
			},
			{
				order: 20,
				route: '/team',
				title: 'Teams',
				icon: 'group'
			},
			{
				order: 30,
				route: '/match',
				title: 'Schedule',
				icon: 'view_agenda'
			},
			{
				order: 40,
				route: '/score',
				title: 'Scores',
				icon: 'subtitles'
			},
		];
		this.navAdmin = [
			{
				order: 0,
				route: '/admin/dashboard',
				title: 'Dashboard',
				icon: 'dashboard'
			},
			{
				order: 10,
				route: '/admin/team',
				title: 'Teams',
				icon: 'group'
			},
			{
				order: 30,
				route: '/admin/score',
				title: 'Scores',
				icon: 'subtitles'
			},
			{
				order: 50,
				route: '/admin/timer/display',
				title: 'Timer Display',
				icon: 'access_time'
			},
			{
				order: 51,
				route: '/admin/timer/control',
				title: 'Timer Control',
				icon: 'timer'
			},
		];
	}

	setDefaultLayout() {
		this.backButton = false;
		this.forceSidenavClose = false;
		this.hideToolbar = false;
		this.setTitle( '' );
	}


	private routerEventSubscribers() {
		this.router.events.pipe( filter( event => event instanceof NavigationStart ) )
			.subscribe( ( event: NavigationStart ) => {
				this.setDefaultLayout();
			} );
		this.router.events.pipe( filter( event => event instanceof GuardsCheckEnd ) )
			.subscribe( ( event: GuardsCheckEnd ) => {
				if ( event.url.includes( '/admin' ) ) {
					if ( event.shouldActivate && this.currentNav !== NavType.ADMIN ) {
						this.setNav( NavType.ADMIN );
					}
				} else if ( this.currentNav !== NavType.PUBLIC ) {
					this.setNav( NavType.PUBLIC );
				}
			} );
	}

	private breakpointSubscriber() {
		this.breakpointObserver.observe( [
			Breakpoints.Handset,
			Breakpoints.Tablet,
			'(max-width: 1280px)',
			Breakpoints.WebPortrait
		] ).pipe( takeUntil( this.unsubscribe$ ) )
			.subscribe( breakpoint => {
				this._isHandset = breakpoint.matches;
			} );
	}
}
