import { Injectable } from '@angular/core';
import { SpecificationDTO } from '../model/SpecificationDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
//import 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SpecificationService {

  constructor(private http: HttpClient ) { }

  save( dto: SpecificationDTO ): Observable<SpecificationDTO> {
   // if ( dto.id > 0) // If id larger than 0 then the person needs to be updated not added
   //   return this.http.put<PersonDto>('http://localhost:9090/api/person/' + dto.id, dto);
   // else
   alert("in specificationService");
      return this.http.post<SpecificationDTO>('http://localhost:9090/api/specifications/new', dto);
  }

  //findUser(username: string): Observable<ExerciseDTO[]> {
   // return this.http.get<ExerciseDTO[]>('http://localhost:9090/api/login/' + username);
  //}

  //findPerson(id: number): Observable<PersonDto> {
    //return this.http.get<PersonDto>('http://localhost:9001/api/person/' + id);
  //}

}

