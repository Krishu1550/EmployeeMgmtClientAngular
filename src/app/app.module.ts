import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { AuthenticationComponent } from './authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UrlSerializer } from '@angular/router';
import { ErrorInterceptor } from './Interceptor/error.interceptor';
=======
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
>>>>>>> a575978d32f3c22527a4f38e560ceb7cced76eaa

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
<<<<<<< HEAD
    AuthenticationComponent,
    NavbarComponent,
=======
    CourseComponent,
    DashboardComponent
>>>>>>> a575978d32f3c22527a4f38e560ceb7cced76eaa
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
