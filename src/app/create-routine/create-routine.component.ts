import { Component, OnInit } from '@angular/core';
import { RoutineService } from '../../Service/RoutineService';
import { RoutineDTO } from '../../model/RoutineDTO';

@Component({
  selector: 'app-create-routine',
  templateUrl: './create-routine.component.html',
  styleUrls: ['./create-routine.component.css']
})
export class CreateRoutineComponent implements OnInit {

  name: string;

  showNewSpecification = false;

  constructor(private routineService: RoutineService) { }

  ngOnInit() {
  }

  createNewRoutine() {
    let routineDTO = new RoutineDTO();
    routineDTO.name = this.name;
    
  }

  newSpecification() {
    this.showNewSpecification = this.routineService.showMakeNewSpecification();
  }


}
