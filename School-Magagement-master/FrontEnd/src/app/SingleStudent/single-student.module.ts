import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleStudentDrawerComponent } from './single-student-drawer/single-student-drawer.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleStudentComponenetComponent } from './single-student-componenet/single-student-componenet.component';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';

const routes: Routes = [
  { path: '', component: SingleStudentDrawerComponent },
];

@NgModule({
  exports: [RouterModule],
  declarations: [
    SingleStudentDrawerComponent,
    SingleStudentComponenetComponent
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

  bootstrap: [SingleStudentDrawerComponent],
  providers: [NzDrawerService]
})
export class SingleStudentModule { }
