/* declarations: NzDrawerCustomComponent */

import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
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
  value = 'ng';

  constructor(private drawerService: NzDrawerService) {}

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
    const drawerRef = this.drawerService.create<SingleStudentComponenetComponent, { value: string }, string>({
      nzTitle: 'Component',
      nzFooter: 'Footer',
      nzExtra: 'Extra',
      nzContent: SingleStudentComponenetComponent,
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
}
