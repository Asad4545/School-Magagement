/* declarations: NzDrawerCustomComponent */

import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { AddTeacherComponent} from '../Teacher/teacher/TeacherComponent/add-teacher/add-teacher.component';
import { TeacherServiceService } from '../Teacher/teacher/Service/teacher-service.service';

@Component({
  selector: 'app-teacherdrawer',
  templateUrl: './teacherdrawer.component.html'
})
export class TeacherdrawerComponent {
  @ViewChild('drawerTemplate', { static: false }) drawerTemplate?: TemplateRef<{
    $implicit: { value: string };
    drawerRef: NzDrawerRef<string>;
  }>;
  value = 'ng';
  allTeacher: any[] =[];

  constructor(private drawerService: NzDrawerService, private TchService: TeacherServiceService) {}

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
    const drawerRef = this.drawerService.create<AddTeacherComponent, { value: string }, string>({
      nzTitle: 'Component',
      nzFooter: 'Footer',
      nzExtra: 'Extra',
      nzContent: AddTeacherComponent,
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
    });
  }

  EditTch(Tch: any): void {
    const drawerRef = this.drawerService.create<AddTeacherComponent, { value: string }, string>({
      nzTitle: 'Component',
      nzFooter: 'Footer',
      nzExtra: 'Extra',
      nzContent: AddTeacherComponent,
      nzContentParams: {
        value: Tch
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

  GetTeacher(){
    this.TchService.GetTeacher().subscribe((Response =>{
      this.allTeacher = [Response];

    }));
  }

  DeleteTeacher(Tch:any){
    this.TchService.DeleteTecher(Tch.teacherId).subscribe((Response=>{

    }));
  }
}
  




