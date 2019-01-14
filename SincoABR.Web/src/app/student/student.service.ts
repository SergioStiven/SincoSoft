import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>(environment.baseApiUrl + 'students/getall', httpOptions)
  }

  getById(id: number): Observable<any>{
    return this.http.get<any>(environment.baseApiUrl + 'students/getbyid/' + id, httpOptions)
  }

}