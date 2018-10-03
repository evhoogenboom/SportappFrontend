import { Component, OnInit } from '@angular/core';
import { RoutineDTO } from '../../model/RoutineDTO';
import { RoutineService } from '../../Service/RoutineService';
import { SpecificationDTO } from '../../model/SpecificationDTO';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  constructor(private routineService: RoutineService) { }

  ngOnInit() {
    this.updateRoutines();
  }
    
  selectedRoutine: RoutineDTO;
  routines: RoutineDTO [];
 
  updateRoutines() {
    this.routineService.findRoutines(+(localStorage.getItem('id'))).subscribe(data => {
      this.routines = data;
      });
  }

  selectRoutine(routine: RoutineDTO){
    this.routineService.selectedRoutine = routine;
    this.selectedRoutine = routine;
    this.showSpecifications(routine);
  }
  
  checkSelected(): Boolean {
    if (this.selectedRoutine == null){
      return false;
    } else {
      return true;
    }
  }
  
  deleteRoutine(routine: RoutineDTO){
    console.log(routine);
    this.routineService.deleteRoutine(routine.id).subscribe(()=> {
      this.updateRoutines();
    });
    
  }
  
  newR: Boolean;

  newRoutine(){
    this.newR = true;
  }


  specifications: SpecificationDTO[];


  showSpecifications(routine: RoutineDTO){
    this.routineService.getSpecifications(routine.id).subscribe(data => {
      this.specifications = data;
    });
  }

  deleteSpecification(specification: SpecificationDTO){
    this.routineService.deleteSpecification(specification.id).subscribe(()=> {
      this.showSpecifications(this.routineService.selectedRoutine);
    });
  }


}
