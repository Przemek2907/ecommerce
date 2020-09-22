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
      {appTitle: "USER MANAGEMENT", description: "Some description 1", link: "/administration/users", linkName: 'USERS MANAGEMENT'},
      {appTitle: "ROLES MANAGEMENT", description: "Some description 1", link: "/administration/roles", linkName: 'ROLES MANAGEMENT'},
      {appTitle: "WORKFLOW MANAGEMENT", description: "Some description 2", link: "/administration/workflow", linkName: 'WORKFLOW MANAGEMENT' },
      {appTitle: "INTEGRATION", description: "Some description 3", link: "/administration/integrations", linkName: 'SYSTEM INTEGRATIONS'},
      {appTitle: "JOB AD TEMPLATES", description: "Some description 4", link: "/administration/job_templates", linkName: 'JOB TEMPLATES'},
      {appTitle: "EMAIL TEMPLATES", description: "Some description 5", link: "/administration/mail_templates", linkName: 'MAIL TEMPLATES'}
      ]
  }
}
