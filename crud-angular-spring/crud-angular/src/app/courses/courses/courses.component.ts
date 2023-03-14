import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Course } from '../model/course';
import { CourseService } from '../services/course.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses$: Observable<Course[]>;

  displayedColumns = ['name', 'category'];

  //courseService:CourseService;

  constructor(private courseService:CourseService){
    //this.courses = [];
    //this.courseService = new CourseService();
    this.courses$ = this.courseService.list()
    .pipe(
      catchError(error =>  {
        console.log(error)
        return of([])
      })
    );

  }

  ngOnInit(): void {

  }

}
