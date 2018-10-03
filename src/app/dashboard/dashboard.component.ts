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

  specifications: SpecificationDTO[];

  routines: RoutineDTO [];
 
  updateRoutines() {
    this.routineService.findRoutines(+(localStorage.getItem('id'))).subscribe(data => {
      this.routines = data;
      });
  }

  select(routine){
    this.selectedRoutine = routine;
    this.showSpecifications();
  }

  checkSelected(): Boolean {
    if (this.selectedRoutine == null){
      return false;
    } else {
      return true;
    }
  }

  showSpecifications(){
    this.routineService.getSpecifications(this.selectedRoutine.id).subscribe(data => {
      this.specifications = data;
    });
  }
  
  deleteRoutine(routine: RoutineDTO){
    console.log(routine);
    this.routineService.deleteRoutine(routine.id).subscribe(()=> {
      this.updateRoutines();
    });
    
  }

  test(){
    alert("test");
  }

}
