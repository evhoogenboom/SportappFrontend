import { Injectable } from '@angular/core';
import { ExerciseDTO } from '../model/ExerciseDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
//import 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ExerciseService {

  constructor(private http: HttpClient ) { }

  save( dto: ExerciseDTO ): Observable<ExerciseDTO> {
   // if ( dto.id > 0) // If id larger than 0 then the person needs to be updated not added
   //   return this.http.put<PersonDto>('http://localhost:9090/api/person/' + dto.id, dto);
   // else
   //alert("test");
      return this.http.post<ExerciseDTO>('http://localhost:9090/api/exercise/new', dto);
  }

  //findUser(username: string): Observable<ExerciseDTO[]> {
   // return this.http.get<ExerciseDTO[]>('http://localhost:9090/api/login/' + username);
  //}

  //findPerson(id: number): Observable<PersonDto> {
    //return this.http.get<PersonDto>('http://localhost:9001/api/person/' + id);
  //}

  findAllExercises(): Observable<ExerciseDTO[]> {
    return this.http.get<ExerciseDTO[]>('http://localhost:9090/api/exercise/');
  }



}

