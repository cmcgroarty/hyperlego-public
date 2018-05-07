import { Component, OnInit } from '@angular/core';
import {LayoutService} from "../../services/layout.service";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private layout:LayoutService) { }

  ngOnInit() {
		this.layout.setTitle('Not Found');
  }

}
