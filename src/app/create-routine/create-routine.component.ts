import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RoutineService } from '../../Service/RoutineService';
import { RoutineDTO } from '../../model/RoutineDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-routine',
  templateUrl: './create-routine.component.html',
  styleUrls: ['./create-routine.component.css']
})
export class CreateRoutineComponent implements OnInit {

  name: string;

  showNewSpecification = false;

  constructor(private routineService: RoutineService, private router: Router) { }

  ngOnInit() {
  }

  @Output() newRoutine = new EventEmitter<string>();

  routines: RoutineDTO[];

  addRoutine(){
    let routineDTO = new RoutineDTO();
    routineDTO.name = this.name;
    let id = +(localStorage.getItem('id'));
    this.routineService.addRoutine(id, routineDTO).subscribe(data => {
      this.newRoutine.emit();
      });
  }

  /*
  newSpecification() {  //shows the 'createExercise component'
    this.showNewSpecification = this.routineService.showMakeNewSpecification();
  }
  */

  
  

}
