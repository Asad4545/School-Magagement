import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddClassComponent } from './ClassComponent/add-class/add-class.component';
import { ClassDrawerComponent } from './class-drawer/class-drawer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDrawerComponent, NzDrawerService } from 'ng-zorro-antd/drawer';


const routes: Routes = [
  { path: '', component: ClassDrawerComponent },
];

@NgModule({
  exports: [RouterModule],
  declarations: [
    AddClassComponent,
    ClassDrawerComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCardModule,
    NzTableModule,
    NzFormModule
  ],
  bootstrap: [ClassDrawerComponent],
  providers: [NzDrawerService]
})
export class ClassModule { }
