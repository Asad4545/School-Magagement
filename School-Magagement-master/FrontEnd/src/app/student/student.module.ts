import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';

import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './AddStudent/add-student/add-student.component';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

import { StudentDrawerComponent } from './student-drawer/student-drawer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassServiceService } from '../Classes/class/Service/class-service.service';


const routes: Routes = [
  { path: '', component: StudentDrawerComponent },
];

@NgModule({
  exports: [RouterModule],
  declarations: [
    AddStudentComponent,
    StudentDrawerComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCardModule,
    NzFormModule
  ],
  bootstrap: [StudentDrawerComponent],
  providers: [NzDrawerService, ClassServiceService]
})
export class StudentModule { }
