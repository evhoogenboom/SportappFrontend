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

  save( dto: LoginDTO ): Observable<LoginDTO> {
   // if ( dto.id > 0) // If id larger than 0 then the person needs to be updated not added
   //   return this.http.put<PersonDto>('http://localhost:9090/api/person/' + dto.id, dto);
   // else
   //alert("test");
      //return this.http.post<LoginDTO>('http://localhost:9090/api/user', dto);
      return null;
  }

  findUser(username: string): Observable<LoginDTO[]> {
    return this.http.get<LoginDTO[]>('http://localhost:9090/api/login/' + username);
  }

  //findPerson(id: number): Observable<PersonDto> {
    //return this.http.get<PersonDto>('http://localhost:9001/api/person/' + id);
  //}

}

