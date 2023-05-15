import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD

=======
>>>>>>> a452acdac71e582f9018c3f9fafdea384178c394
import { AuthenticationComponent } from './authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UrlSerializer } from '@angular/router';
import { ErrorInterceptor } from './Interceptor/error.interceptor';
<<<<<<< HEAD

import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
=======
import { CourseComponent } from './course/course.component';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { JWTInterceptor } from './Interceptor/autthentication.interceptor';
import { StudentEnrollCourse } from './student/student-enroll.component';
import { StudentEnrolledCourse } from './student/student-enrolled.component';
import { StudentDashboardComponent } from './student/dashboard/dashboard.component';
import { StudentService } from './services/student.service';
>>>>>>> a452acdac71e582f9018c3f9fafdea384178c394

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
<<<<<<< HEAD
=======

>>>>>>> a452acdac71e582f9018c3f9fafdea384178c394
    AuthenticationComponent,
    NavbarComponent,

    CourseComponent,
<<<<<<< HEAD
    DashboardComponent
=======
    AdminDashboardComponent,
    StudentComponent,
    StudentEnrollCourse,
    StudentEnrolledCourse,
    StudentDashboardComponent,
>>>>>>> a452acdac71e582f9018c3f9fafdea384178c394
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true,
    },
    StudentService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
