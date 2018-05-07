import {AfterViewInit, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Match} from "../../shared/model/match.model";
import {MatchStatus} from "../../shared/model/match-status.model";
import {LayoutService} from "../../core/services/layout.service";
import {MatchService} from "../../core/services/match.service";
import {DOCUMENT} from '@angular/common';
import {PageScrollInstance, PageScrollService} from "ngx-page-scroll";
import {Observable, Subject} from "rxjs";
import {takeUntil} from 'rxjs/operators';

@Component({
	selector: 'app-matches',
	templateUrl: './matches.component.html',
	styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit, OnDestroy, AfterViewInit {

	matches$: Observable<Match[]>;
	playing: Match;
	private unsubscribe$ = new Subject<void>();


	constructor(private layout: LayoutService, private service: MatchService, private scroll: PageScrollService, @Inject(DOCUMENT) private document: any) {
	}

	ngOnInit() {
		this.layout.setTitle('Schedule');
		this.matches$ = this.service.getAllMatches();
		this.matches$.pipe(takeUntil(this.unsubscribe$))
			.subscribe(matches => {
				this.playing = matches.find(match => {
					return match.status === MatchStatus.PLAYING;
				});
			});
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	ngAfterViewInit() {
		if (this.playing !== undefined) {
			let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
				document: this.document,
				pageScrollOffset: 66,
				scrollTarget: '#match' + this.playing.id,
				verticalScrolling: true
			});
			this.scroll.start(pageScrollInstance);
		}
	}

	matchStatusClass(status: MatchStatus): string {
		switch (status) {
			case MatchStatus.PLAYED:
				return 'played';
			case MatchStatus.PLAYING:
				return 'hyper-dark-theme';
			default:
				return '';
		}
	}

	isMatchPlaying(match: Match): boolean {
		return match.status === MatchStatus.PLAYING;
	}

}
