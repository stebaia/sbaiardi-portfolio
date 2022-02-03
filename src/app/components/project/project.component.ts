import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../mock/mock-project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = PROJECTS
  

}
