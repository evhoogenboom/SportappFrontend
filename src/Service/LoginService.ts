import { Injectable } from '@angular/core';
import { LoginDTO } from '../model/LoginDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
//import 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  constructor(private http: HttpClient ) { }

  findUser(username: string): Observable<LoginDTO[]> {
    return this.http.get<LoginDTO[]>('http://localhost:9090/api/login/' + username);
  }

}

