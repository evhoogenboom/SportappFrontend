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

  private makeNewRoutine = false;
  private makeNewSpecification = false;


  constructor(private http: HttpClient ) { }

  public getMakeNewRoutine() {
    return this.makeNewRoutine;
  }

  public showMakeNewRoutine() {
    return this.makeNewRoutine = true;
  }

  public hideMakeNewRoutine() {
    return this.makeNewRoutine = false;
  }

  public getMakeNewSpecification() {
    return this.makeNewSpecification;
  }

  public showMakeNewSpecification() {
    return this.makeNewSpecification = true;
  }

  public hideMakeNewSpecification() {
    return this.makeNewSpecification = false;
  }

  save( dto: RoutineDTO ): Observable<RoutineDTO> {
    return this.http.post<RoutineDTO>('http://localhost:9090/api/routine/new', dto);
  }

  findAllRoutines(): Observable<RoutineDTO[]> {  
    return this.http.get<RoutineDTO[]>('http://localhost:9090/api/routine/all');
  }

  addSpecification(id: number, dto: SpecificationDTO): Observable<SpecificationDTO> {
    return this.http.put<SpecificationDTO>('http://localhost:9090/api/routine/'+ id + '/addSpecification', dto);
  }

  getSpecifications(id: number): Observable<SpecificationDTO[]>{
    return this.http.get<SpecificationDTO[]>('http://localhost:9090/api/routine/' + id + '/specifications');
  }

}

