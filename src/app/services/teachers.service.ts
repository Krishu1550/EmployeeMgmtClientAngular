import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../interfaces/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  baseUrlGet = 'https://localhost:7003/api/Teacher/GetTeacher';
  baseUrlPost = 'https://localhost:7003/api/Teacher/CreateTeacher';
  baseUrlPut = 'https://localhost:7003/api/Teacher/UpdateTeacher';
  baseUrlDelete = 'https://localhost:7003/api/Teacher/DeleteTeacher';

  constructor(private http: HttpClient) { }

  getAllTeachers(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.baseUrlGet);
  }

  addTeacher(teacher: Teacher): Observable<Teacher>{
    teacher.teacherId=0;
    return this.http.post<Teacher>(this.baseUrlPost, teacher);
  }
  deleteTeacher(id: number): Observable<Teacher>{
    return this.http.delete<Teacher>(this.baseUrlDelete+'/'+id);
  }
  updateTeacher(teacher: Teacher): Observable<Teacher>{
    
    return this.http.post<Teacher>(this.baseUrlPut, teacher)
  }
  
}
