import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { CourseComponent } from './course/course.component';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { JWTInterceptor } from './Interceptor/autthentication.interceptor';
import { StudentEnrollCourse } from './student/Student-EnrollCourse/student-enroll.component';
import { StudentEnrolledCourse } from './student/student-enrolled.component';
import { StudentDashboardComponent } from './student/dashboard/dashboard.component';
import { StudentService } from './services/student.service';
import { ErrorInterceptor } from './Interceptor/error.interceptor';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    CourseComponent,
    AuthenticationComponent,
    NavbarComponent,
    AdminDashboardComponent,
    StudentComponent,
    StudentEnrollCourse,
    StudentEnrolledCourse,
    StudentDashboardComponent,

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
