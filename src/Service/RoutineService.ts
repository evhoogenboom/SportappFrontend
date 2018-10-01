import { Injectable } from '@angular/core';
import { RoutineDTO } from '../model/RoutineDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
//import 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RoutineService {

  constructor(private http: HttpClient ) { }

  save( dto: RoutineDTO ): Observable<RoutineDTO> {
   // if ( dto.id > 0) // If id larger than 0 then the person needs to be updated not added
   //   return this.http.put<PersonDto>('http://localhost:9090/api/person/' + dto.id, dto);
   // else
   //alert("test");
      return this.http.post<RoutineDTO>('http://localhost:9090/api/routine/new', dto);
  }

  //findUser(username: string): Observable<ExerciseDTO[]> {
   // return this.http.get<ExerciseDTO[]>('http://localhost:9090/api/login/' + username);
  //}

  //findPerson(id: number): Observable<PersonDto> {
    //return this.http.get<PersonDto>('http://localhost:9001/api/person/' + id);
  //}

  findAllRoutines(): Observable<RoutineDTO[]> {  // bestaat nog niet in backend
    return this.http.get<RoutineDTO[]>('http://localhost:9090/api/routine/');
  }



}

