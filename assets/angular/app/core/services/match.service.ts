import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import {HttpClient} from "@angular/common/http";
import {Match} from "../../shared/model/match.model";
import {MATCHES} from "../../shared/mocks/matches.mock";

@Injectable()
export class MatchService {

  constructor(private http:HttpClient) {
	}

	getAllMatches():Observable<Match[]>{
		//return this.http.get<Match[]>('');
		return Observable.of(MATCHES);
	}

	getMatch(id:number):Observable<Match>{
  	//retutn this.http.get<Match>('' + id);
		return Observable.of(MATCHES.find(match => {return match.id === id;}));
	}

	createMatch(match:Match):Observable<Match> {
  	return this.http.post('', match);
	}
	updateMatch(match:Match):Observable<Match>{
  	return this.http.put(''+match.id, match);
	}
	deleteMatch(id:number){
  	return this.http.delete(''+id);
	}


}
