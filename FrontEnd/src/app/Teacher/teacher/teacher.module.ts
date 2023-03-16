import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddTeacherComponent } from './TeacherComponent/add-teacher/add-teacher.component';

import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { TeacherdrawerComponent } from 'src/app/teacherdrawer/teacherdrawer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';

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
    ReactiveFormsModule,
    NzFormModule
  ],
  bootstrap: [TeacherdrawerComponent],
  providers: [NzDrawerService]
})
export class TeacherModule { }
