import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../Service/ExerciseService';
import { ExerciseDTO } from '../../model/ExerciseDTO';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit {

  name: string;
  description: string;

  constructor(private service: ExerciseService) { }

  ngOnInit() {
  }

  dto = new ExerciseDTO;

  save() {
    this.dto.name = this.name;
    this.dto.description = this.description;
    this.service.save(this.dto).subscribe(data => {});
  }






}
