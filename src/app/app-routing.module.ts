import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuardServices } from './services/authGuard.service';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { StudentDashboardComponent } from './student/dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { StudentEnrollCourse } from './student/Student-EnrollCourse/student-enroll.component';
import { StudentEnrolledCourse } from './student/student-enrolled.component';
import { StudentUnEnrollCourse } from './student/student-unenroll.component';

const routes: Routes = [
  {
    path: 'teacher',
    component: TeacherComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
  },
  { path: 'login', component: AuthenticationComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    // canActivate: [AuthGuardServices],
  },
  {
    path: 'student',
    component: StudentDashboardComponent,
  },
  {
    path: 'student-profile',
    component: StudentComponent,
  },
  {
    path: 'student-enrollcourse',
    component: StudentEnrollCourse,
  },
  {
    path: 'student-enrolledcourse',
    component: StudentEnrolledCourse,
  },
  {
    path: 'unenroll',
    component: StudentUnEnrollCourse,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
