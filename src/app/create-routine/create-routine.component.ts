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

  addRoutine(){
    let DTO = new RoutineDTO();
    DTO.name = this.name;
    let id = +(localStorage.getItem('id'));
    this.routineService.addRoutine(id, DTO).subscribe(data => {
      this.changeStatus();
      this.added.emit();
    });
  }

}
