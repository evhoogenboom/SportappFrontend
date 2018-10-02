import { Injectable } from '@angular/core';
import { RegisterDTO } from '../model/RegisterDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
//import 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient ) { }

  save( dto: RegisterDTO): Observable<RegisterDTO> {
   // if ( dto.id > 0) // If id larger than 0 then the person needs to be updated not added
   //   return this.http.put<PersonDto>('http://localhost:9090/api/person/' + dto.id, dto);
   // else
      return this.http.post<RegisterDTO>('http://localhost:9090/api/user', dto);
  }


}

