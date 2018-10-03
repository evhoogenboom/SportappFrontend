import { Component, OnInit, Input } from '@angular/core';
import { RoutineService } from '../../Service/RoutineService';
import { RoutineDTO } from '../../model/RoutineDTO';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

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

  /*
  createNewRoutine() {
    let routineDTO = new RoutineDTO();
    routineDTO.name = this.name;
    this.routineService.save(routineDTO).subscribe(data => {
      this.routineService.currentRoutine = data;
      });
  }
  */

  @Input() jojo: DashboardComponent;

  addRoutine(){
    let routineDTO = new RoutineDTO();
    routineDTO.name = this.name;
    let id = +(localStorage.getItem('id'));
    this.routineService.addRoutine(id, routineDTO).subscribe(data => {
      this.routineService.findRoutines(id);
      //document.location = document.location;
      });
  }

  newSpecification() {  //shows the 'createExercise component'
    this.showNewSpecification = this.routineService.showMakeNewSpecification();
  }
  

}
