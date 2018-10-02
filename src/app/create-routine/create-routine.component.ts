import { Component, OnInit } from '@angular/core';
import { RoutineService } from '../../Service/RoutineService';

@Component({
  selector: 'app-create-routine',
  templateUrl: './create-routine.component.html',
  styleUrls: ['./create-routine.component.css']
})
export class CreateRoutineComponent implements OnInit {

  showNewSpecification = false;

  constructor(private routineService: RoutineService) { }

  ngOnInit() {
  }

  newSpecification() {
    this.showNewSpecification = this.routineService.showMakeNewSpecification();
  }


}
