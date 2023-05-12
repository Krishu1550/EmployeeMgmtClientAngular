import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  { path: 'teacher', component: TeacherComponent },
  { path: 'course', component: CourseComponent }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
