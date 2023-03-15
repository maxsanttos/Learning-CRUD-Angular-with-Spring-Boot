import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CoursesComponent } from './containers/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';


@NgModule({
    declarations: [
        CoursesComponent
    ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        AppMaterialModule,
        MatToolbarModule,
        MatProgressSpinnerModule
    ]
})
export class CoursesModule { }
