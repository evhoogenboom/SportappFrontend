import { Component, OnInit } from '@angular/core';
import { RoutineDTO } from '../../model/RoutineDTO';
import { RoutineService } from '../../Service/RoutineService';
import { SpecificationDTO } from '../../model/SpecificationDTO';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private routineService: RoutineService) { }

  ngOnInit() {
    this.updateRoutines();
  }
  
  routines: RoutineDTO[];
  selectedRoutine: RoutineDTO;

  specifications: SpecificationDTO[];

  updateRoutines(){
    this.routineService.findAllRoutines().subscribe(data => {
      this.routines = data;
      });
  }

  select(routine){
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

  showSpecifications(routine: RoutineDTO){
    this.routineService.getSpecifications(this.selectedRoutine.id).subscribe(data => {
      this.specifications = data;
    });
  }
  
  
  delete(routine: RoutineDTO){
    alert();
  }


}
