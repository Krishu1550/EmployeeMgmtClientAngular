import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseUrlGet = 'https://localhost:7003/api/Course/GetCourses';
  baseUrlPost = 'https://localhost:7003/api/Course/CreateCourse';
  baseUrlPut = 'https://localhost:7003/api/Course/UpdateCourse';
  baseUrlDelete = 'https://localhost:7003/api/Course/DeleteCourse';

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUrlGet);
  }

  addCourse(course: Course): Observable<Course>{
    course.courseId=0;
    return this.http.post<Course>(this.baseUrlPost, course);
  }
  deleteCourse(id: number): Observable<Course>{
    return this.http.delete<Course>(this.baseUrlDelete+'/'+id);
  }
  updateCourse(course: Course): Observable<Course>{
    
    return this.http.post<Course>(this.baseUrlPut, course)
  }
  
}

