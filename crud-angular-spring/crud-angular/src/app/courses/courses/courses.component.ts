import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from './../model/course';
import { CourseService } from './../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses$: Observable<Course[]>;
  displayedColumns = ['name','category'];

  //courseService: CourseService;

  constructor(private courseService: CourseService,
    public dialog: MatDialog){
    //this.courses = [];
    //this.courseService = new CourseService();
    this.courses$ = this.courseService.list()
    .pipe(
      catchError(error => {
        this.onError('Error ao carregar cursos.');
        return of([])
      })
    );
  }

  onError(errorMgs: string) {
    this.dialog.open(ErrorDialogComponent, {
      data:errorMgs
    });
  }

  ngOnInit(): void {

  }

}
