import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {IEmp} from './emp';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})

export class EmpService {

  private url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmp[]>{
    
    return this.http.get<IEmp[]>(this.url, httpOptions);
    
  }

  addEmp(): Observable<IEmp[]>{
    return this.http.post<IEmp[]>(this.url,{
      userId: 202,
    id: 203,
    title: "king",
    body: 'Lorem Epsum'
    },httpOptions);
  }

  dataStatus(id): Observable<IEmp[]>{
  
    return this.http.put<IEmp[]>(`${this.url}/${id}`,{
      userId: 101,
    id: 121,
    title: "King of attitude",
    body: 'only right attitude takes you to greater hights'
    },httpOptions);   
  }


  deleteEmp(id): Observable<IEmp[]>
  {
    return this.http.delete<IEmp[]>(`${this.url}/${id}`,httpOptions)
  }

}
  
  
  
    
  
  
 

