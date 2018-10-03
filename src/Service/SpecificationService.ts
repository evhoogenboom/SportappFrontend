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
    alert("in specificationService");
    return this.http.post<SpecificationDTO>('http://localhost:9090/api/specifications/new', dto);
  }

}

