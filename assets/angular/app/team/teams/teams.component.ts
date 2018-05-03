import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TeamService} from "../../core/services/team.service";
import 'rxjs/add/operator/switchMap';
import {Observable} from "rxjs/Observable";
import {Team} from "../../shared/model/team.model";
import {Division} from "../../shared/model/division.model";
import {TitleService} from "../../core/services/title.service";
import {MatTabChangeEvent} from "@angular/material";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class TeamsComponent implements OnInit {

	teams: Team[];
	division = Division;
	tabDivision:Division;

  constructor(private title:TitleService, private service: TeamService) { }

  ngOnInit() {
  	this.title.setTitle('Teams');
  	this.service.getAllTeams().subscribe(teams => this.teams = teams);
  }

  onSelect($event:MatTabChangeEvent):void{
  	console.log($event.tab.textLabel);
  	switch($event.tab.textLabel){
			case 'JA':
				this.tabDivision = Division.JA;
				break;
			case 'JQA':
				this.tabDivision = Division.JQA;
				break;
			default:
				this.tabDivision = undefined;
				break;
		}
	}

}
