import { Component, OnInit } from '@angular/core';
import {AdminLinksInterface} from "./AdminLinksInterface";

@Component({
  selector: 'app-contact',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  administrationLinks: AdminLinksInterface[];

  constructor() { }

  ngOnInit() {
    this.administrationLinks = [
      {appTitle: "USER MANAGEMENT", description: "Some description 1", link: "asd"},
      {appTitle: "WORKFLOW MANAGEMENT", description: "Some description 2"},
      {appTitle: "INTEGRATION", description: "Some description 3"},
      {appTitle: "JOB AD TEMPLATES", description: "Some description 4"},
      {appTitle: "EMAIL TEMPLATES", description: "Some description 5"}
      ]
  }
}
