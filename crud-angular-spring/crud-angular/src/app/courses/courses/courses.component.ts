import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses: any[] = [];

  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
