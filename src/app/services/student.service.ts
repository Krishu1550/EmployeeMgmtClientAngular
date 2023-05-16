import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Student } from '../interfaces/student';
import { Course } from '../interfaces/course';
import { EnrollCourse } from '../interfaces/enrollCourse';

@Injectable()
export class StudentService {
  constructor(private http: HttpClient) {}

  baseurl = environment.apiUrl;
  courseEnroll?: EnrollCourse;

  getProfile() {
    const username = localStorage.getItem('username');
    if ((username as string) == '' || username == null) {
      console.log('No Uername' + username);
      return null;
    }
    return this.http.get<Student>(
      this.baseurl + 'Student/GetProfile/' + username
    );
  }
  UpdateProfile(updatedata: any) {
    this.http
      .post<Student>(this.baseurl + 'Student/EditProfile', updatedata.value)
      .subscribe();
  }

  getEnrolledCourse() {
    const username = localStorage.getItem('username');
    if ((username as string) == '' || username == null) {
      console.log('No Uername' + username);
      return null;
    }
    return this.http.get<Course[]>(
      this.baseurl + 'Student/GetEnrollCourse/' + username
    );
  }
  unEnrollCourse(courseId: number) {
    this.courseEnroll = new EnrollCourse();

    this.courseEnroll.courseId = courseId;
    this.courseEnroll.studentEmail = localStorage
      .getItem('username')
      ?.toString();

    console.log(this.courseEnroll);
    this.http.post<EnrollCourse>(
      this.baseurl + 'Student/UnEnrollCourse',
      this.courseEnroll
    )
    .subscribe();
  }

  enrollCourse(courseId: number | undefined) {
    this.courseEnroll = new EnrollCourse();

    this.courseEnroll.courseId = courseId;
    this.courseEnroll.studentEmail = localStorage
      .getItem('username')
      ?.toString();

    console.log(this.courseEnroll);
    this.http
      .post<EnrollCourse>(
        this.baseurl + 'Student/EnrollCourse',
        this.courseEnroll
      )
      .subscribe();
  }
}
