import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>(environment.baseApiUrl + 'teachers/getall', httpOptions);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseApiUrl + 'teachers/getbyid/' + id, httpOptions);
  }

  save(student: any): Observable<any> {
    return this.http.post<any>(environment.baseApiUrl + 'teachers/save', student, httpOptions);
  }

  update(student: any, id: number): Observable<any> {
    return this.http.put<any>(environment.baseApiUrl + 'teachers/update/' + id, student, httpOptions);
  }

}
