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
  status: number = 0;

  //showNewSpecification = false;

  @Output() added = new EventEmitter<string>();

  constructor(private routineService: RoutineService, private router: Router) { }

  ngOnInit() {
  }

  changeStatus(){
    if (this.status == 0){
      this.status = 1;
    } else if (this.status ==1 ){
      this.status = 0;
    }
  }

  

  //routines: RoutineDTO[];

  /*
  addRoutine(){
    let routineDTO = new RoutineDTO();
    routineDTO.name = this.name;
    let id = +(localStorage.getItem('id'));
    this.routineService.addRoutine(id, routineDTO).subscribe(data => {
      this.newRoutine.emit();
      });
  }
  */

  addRoutine(){
    let DTO = new RoutineDTO();
    DTO.name = this.name;
    let id = +(localStorage.getItem('id'));
    this.routineService.addRoutine(id, DTO).subscribe(data => {
      this.changeStatus();
      this.added.emit();
    });
  }
  

  /*
  newSpecification() {  //shows the 'createExercise component'
    this.showNewSpecification = this.routineService.showMakeNewSpecification();
  }
  */

  
  

}
