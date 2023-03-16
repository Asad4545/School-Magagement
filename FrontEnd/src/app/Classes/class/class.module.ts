import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddClassComponent } from './ClassComponent/add-class/add-class.component';


const routes: Routes = [
  { path: '', component: AddClassComponent },
];

@NgModule({
  exports: [RouterModule],
  declarations: [
    AddClassComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ClassModule { }
