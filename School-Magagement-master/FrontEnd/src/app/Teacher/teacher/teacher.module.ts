import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddTeacherComponent } from './TeacherComponent/add-teacher/add-teacher.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { TeacherdrawerComponent } from 'src/app/Teacher/teacher/teacherdrawer/teacherdrawer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';

const routes: Routes = [
  { path: '', component: TeacherdrawerComponent },
];

@NgModule({
  exports: [RouterModule],
  declarations: [
    AddTeacherComponent,
    TeacherdrawerComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    NzTableModule,
    ReactiveFormsModule,
    NzCardModule,
    NzButtonModule,
    NzGridModule,
    NzFormModule
  ],
  bootstrap: [TeacherdrawerComponent],
  providers: [NzDrawerService]
})
export class TeacherModule { }
