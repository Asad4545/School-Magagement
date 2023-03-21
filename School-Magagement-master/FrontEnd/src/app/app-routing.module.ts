import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  { path: 'teacher', loadChildren: () => import('./Teacher/teacher/teacher.module').then(m => m.TeacherModule) },
  { path: 'class', loadChildren: () => import('./Classes/class/class.module').then(m => m.ClassModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
