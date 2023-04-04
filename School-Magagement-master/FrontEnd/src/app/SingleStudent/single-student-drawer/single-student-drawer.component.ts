/* declarations: NzDrawerCustomComponent */

import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { StudentService } from 'src/app/student/Services/student.service';
import { SingleStudentServiceService } from '../Service/single-student-service.service';
import { SingleStudentComponenetComponent } from '../single-student-componenet/single-student-componenet.component';

@Component({
  selector: 'app-single-student-drawer',
  templateUrl: './single-student-drawer.component.html'
})
export class SingleStudentDrawerComponent {
  @ViewChild('drawerTemplate', { static: false }) drawerTemplate?: TemplateRef<{
    $implicit: { value: string };
    drawerRef: NzDrawerRef<string>;
  }>;
  AllAttendance: any[] =[]
  value = 'ng';
  AllStudent: any[]=[]
  
  showAttendance: boolean[] = [];

  constructor(private drawerService: NzDrawerService, private AttenService: SingleStudentServiceService, private StdService: StudentService) {}

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
    const drawerRef = this.drawerService.create<SingleStudentComponenetComponent, { value: string, getAtten : any }, string>({
      nzTitle: 'Component',
      nzFooter: 'Footer',
      nzExtra: 'Extra',
      nzContent: SingleStudentComponenetComponent,
      nzContentParams: {
        getAtten:() => {
          this.GetAllAttendance ()
        },
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
    });
  }

  GetAllAttendance(){
    this.AttenService.GetAttendance().subscribe((Response=>{
      this.AllAttendance=Response;
      console.log(this.AllAttendance)
    }))
  }

  MarkAttendance(std: any){
    this.AttenService.MarkAttendence(std).subscribe((Response=>{
      
    }));
  }

  GetAllStudent(){
    this.StdService.GetStudent().subscribe((Response=>{
      this.AllStudent= Response
      console.log(this.AllStudent)
    }));
  }

  
}