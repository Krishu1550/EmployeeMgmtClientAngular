import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UrlSerializer } from '@angular/router';
import { ErrorInterceptor } from './Interceptor/error.interceptor';
import { CourseComponent } from './course/course.component';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { JWTInterceptor } from './Interceptor/autthentication.interceptor';
import { StudentEnrollCourse } from './student/student-enroll.component';
import { StudentEnrolledCourse } from './student/student-enrolled.component';
import { StudentDashboardComponent } from './student/dashboard/dashboard.component';
import { StudentService } from './services/student.service';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,

    AuthenticationComponent,
    NavbarComponent,

    CourseComponent,
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
