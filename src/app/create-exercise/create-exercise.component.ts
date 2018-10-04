import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExerciseService } from '../../Service/ExerciseService';
import { ExerciseDTO } from '../../model/ExerciseDTO';
import { SpecificationDTO } from '../../model/SpecificationDTO';
import { FormGroup } from '@angular/forms';
import { RoutineService } from '../../Service/RoutineService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})

export class CreateExerciseComponent implements OnInit {
  countryForm: FormGroup;


  @Output() changed = new EventEmitter<String>();

  // exercise info
  name = '';
  description = '';

  // specification info
  repetitions: number;
  secBreak: number;
  other: string;

  // keep track of selected exercise
  selectedExercise: ExerciseDTO;
  exercises: ExerciseDTO[];

  //specifications: SpecificationDTO[];

  // display
  status: number = 0;
  Estatus: number = 0;
  
  
  constructor(private exerciseService: ExerciseService, 
    private routineService: RoutineService) { }


  ngOnInit() {
   this.loadExercises();
  }

  changeStatus(){
    if (this.status == 0){
      this.status = 1;
    } else if (this.status ==1 ){
      this.status = 0;
    }
  }

  loadExercises() {
    this.exerciseService.findAllExercises().subscribe(data => {
      this.exercises = data;
      });
  }
  
  newExercise() {
    let dto = new ExerciseDTO();
    dto.name = this.name;
    dto.description = this.description;
    this.exerciseService.save(dto).subscribe(data => {
      dto = data;
      this.addSpecification(dto);
      }); 
  }

  checkExercise() {
    if (this.name != '') {
      this.newExercise();
    } else if (this.selectedExercise != null) {
      this.addSpecification(this.selectedExercise);
    } 
  }

  addSpecification(exercise: ExerciseDTO) {
    console.log(exercise.name+'in addSpecification');
    let dto: SpecificationDTO = new SpecificationDTO();
    dto.exercise = exercise;
    dto.repetitions = this.repetitions;
    dto.secBreak = this.secBreak;
    dto.other = this.other;
    let id = this.routineService.selectedRoutine.id;
    this.routineService.addSpecification(id, dto).subscribe(data =>{
      this.changed.emit();
      this.changeStatus();
      let dto: SpecificationDTO = data;
      alert('this is the exercise'+ exercise.name)
    });
  }

}
