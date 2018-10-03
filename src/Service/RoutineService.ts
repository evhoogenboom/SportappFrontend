import { Injectable } from '@angular/core';
import { RoutineDTO } from '../model/RoutineDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { SpecificationDTO } from '../model/SpecificationDTO';
//import 'rxjs/Rx';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RoutineService {

  // show and hide components
  private makeNewRoutine = false;
  private makeNewSpecification = false;

  // keep track of selected routine for adding specifications
  currentRoutine: RoutineDTO;


  constructor(private http: HttpClient ) { }

  public showMakeNewRoutine() {
    return this.makeNewRoutine = true;
  }

  public hideMakeNewRoutine() {
    return this.makeNewRoutine = false;
  }

  public showMakeNewSpecification() {
    return this.makeNewSpecification = true;
  }

  public hideMakeNewSpecification() {
    return this.makeNewSpecification = false;
  }


  /*
  save( dto: RoutineDTO ): Observable<RoutineDTO> {
    return this.http.post<RoutineDTO>('http://localhost:9090/api/routine/' +'new', dto);
  }
  */

  addRoutine(id: number, dto: RoutineDTO): Observable<RoutineDTO> {
    return this.http.put<RoutineDTO>('http://localhost:9090/api/user/'+ id +'/addRoutine', dto);
  }
	
  findRoutines(id: number): Observable<RoutineDTO[]> {
    console.log('(in RoutineService: user id = '+ id);
    return this.http.get<RoutineDTO[]>('http://localhost:9090/api/user/'+ id + '/routines');
  }

  deleteRoutine(id: number): Observable<Object> {
    return this.http.delete('http://localhost:9090/api/routine/' +'delete/' + id);
  }

  addSpecification(id: number, dto: SpecificationDTO): Observable<SpecificationDTO> {
    return this.http.put<SpecificationDTO>('http://localhost:9090/api/routine/' + id + '/addSpecification', dto);
  }

  getSpecifications(id: number): Observable<SpecificationDTO[]>{
    return this.http.get<SpecificationDTO[]>('http://localhost:9090/api/routine/' + id + '/specifications');
  }

  deleteSpecification(id: number): Observable<Object> {
    return this.http.delete('http://localhost:9090/api/specifications/delete/'+ id);
  }

  changeRoutineName(id: number, name: String): Observable<Object>{
    return this.http.put<String>('http://localhost:9090/api/routine/'+ id +'/changeName', name)
  }
   

}

