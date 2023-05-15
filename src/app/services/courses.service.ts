import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { Course } from '../interfaces/course';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  baseUrl = environment.apiUrl + 'Course/';
  course?: Course;
  constructor(private http: HttpClient) {}
  courseEmiter = new Subject<Course>();

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl + 'GetCourses');
  }

  addCourse(course: Course): Observable<Course> {
    course.courseId = 0;
    return this.http.post<Course>(this.baseUrl + 'CreateCourse', course);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.baseUrl + 'UpdateCourse', course);
  }

  deleteCourse(id: number | undefined): Observable<Course> {
    if (id == null) {
      return throwError('Id is not defined');
    }
    return this.http.delete<Course>(this.baseUrl + 'DeleteCourse/' + id);
  }

  courseDetails(course: Course) {
    this.courseEmiter.next(course);
  }
}
