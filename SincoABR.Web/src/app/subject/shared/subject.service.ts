import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(environment.baseApiUrl + 'matters/getall', httpOptions);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseApiUrl + 'matters/getbyid/' + id, httpOptions);
  }

  save(student: any): Observable<any> {
    return this.http.post<any>(environment.baseApiUrl + 'matters/save', student, httpOptions);
  }

  update(student: any, id: number): Observable<any> {
    return this.http.put<any>(environment.baseApiUrl + 'matters/update/' + id, student, httpOptions);
  }

}
