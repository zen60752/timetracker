import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-projects',
  templateUrl: './show-projects.component.html',
  styleUrls: ['./show-projects.component.css']
})
export class ShowProjectsComponent implements OnInit {


  constructor(private service:SharedService) { }

  ProjectList:any=[];

  ngOnInit(): void {
    this.refreshProjectList();
  }

  refreshProjectList(){
    this.service.getProject().subscribe(data=>{
      this.ProjectList=data;
      console.log(this.ProjectList);
    });
  }
}
