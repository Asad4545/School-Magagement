/* declarations: NzDrawerCustomComponent */

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { AddStudentComponent } from '../AddStudent/add-student/add-student.component';
import { StudentService } from '../Services/student.service';


@Component({
  selector: 'app-student-drawer',
  templateUrl: './student-drawer.component.html'
})
export class StudentDrawerComponent implements OnInit
{
  @ViewChild('drawerTemplate', { static: false }) drawerTemplate?: TemplateRef<{
    $implicit: { value: string };
    drawerRef: NzDrawerRef<string>;
  }>;
  getObject: any[] =[];
  value = 'ng';
  singleStudent: any
  

  constructor(private drawerService: NzDrawerService, private StdService: StudentService) {
    
 }

  openTemplate(): void {
    
    const drawerRef = this.drawerService.create({
      nzTitle: 'Template',
      nzFooter: 'Footer',
      nzExtra: 'Extra',
      nzContent: this.drawerTemplate,
      nzContentParams: {
        value: this.value
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Template) open');
    });

    drawerRef.afterClose.subscribe(() => {
      console.log('Drawer(Template) close');
    });
  }

  openComponent(): void {
    const drawerRef = this.drawerService.create<AddStudentComponent, { value: string }, string>({
      nzTitle: 'Component',
      nzFooter: 'Footer',
      nzExtra: 'Extra',
      nzContent: AddStudentComponent,
      nzContentParams: {
        value: this.value
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data);
      if (typeof data === 'string') {
        this.value = data;
      }
      this.GetStudent()
    });
  }

  GetStdIdValue(){
    if (this.singleStudent === '') {
      this.GetStudent()
    }
    else{
      this.getObject = this.getObject.filter(x => {
        const name = x.studentName.toLowerCase();
        const search = this.singleStudent.toLowerCase();
        return name.includes(search) || name.toUpperCase().includes(search.toUpperCase());
      });
    }
}

  EditStd(std: any): void {
    const drawerRef = this.drawerService.create<AddStudentComponent, { value: string }, string>({
      nzTitle: 'Component',
      nzFooter: 'Footer',
      nzExtra: 'Extra',
      nzContent: AddStudentComponent,
      nzContentParams: {
        value: std
      }
    });
    
    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data);
      if (typeof data === 'string') {
        this.value = data;
      }
      this.GetStudent()
    });
    
  }

  ngOnInit(): void {
      this.GetStudent()
  }

  GetStudent(){
    this.StdService.GetStudent().subscribe((Response =>{
      this.getObject = Response;
    }));
  } 
  
  GetSingleStudent(std: any){
    console.log(std)
    this.StdService.GetSingleStudent(std).subscribe((Response=>{
      console.log(Response)

      this.singleStudent = Response
    }))
  }

  DeleteStudent(std: any){
    console.log("Component Parameter", std.studentId);
    this.StdService.DeleteStudent(std.studentId).subscribe((Response =>{
      console.log("Running")
      this.GetStudent()
    }));
  }


  // Search(id: any){
  //  this.getObject.filter(student=> student.studentId === id);
  // }
}


