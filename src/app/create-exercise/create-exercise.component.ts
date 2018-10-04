import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExerciseService } from '../../Service/ExerciseService';
import { ExerciseDTO } from '../../model/ExerciseDTO';
import { SpecificationDTO } from '../../model/SpecificationDTO';
import { SpecificationService } from '../../Service/SpecificationService';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private specificationService: SpecificationService, private routineService: RoutineService) { }


  ngOnInit() {
   //this.loadExercises();
  }

  changeStatus(){
    if (this.status == 0){
      this.status = 1;
    } else if (this.status ==1 ){
      this.status = 0;
    }
  }

  /*
  loadExercises() {
    this.exerciseService.findAllExercises().subscribe(data => {
      this.exercises = data;
      });
  }
  
  reUseExercise() {
    //alert('reuse exercise');
    this.saveSpecification(this.selectedExercise);
  }

  newExercise() {
    let dto = new ExerciseDTO();
    dto.name = this.name;
    dto.description = this.description;
    this.exerciseService.save(dto).subscribe(data => {
    dto = data;
    alert(dto.id);
    this.saveSpecification(dto);
    });
  }
  */

  /*
  saveSpecification(exerciseDTO: ExerciseDTO) {
    let specificationDTO = new SpecificationDTO();
    specificationDTO.exercise = exerciseDTO;
    specificationDTO = this.addSpecificationInfo(specificationDTO);
    this.specificationService.save(specificationDTO).subscribe(data => {
      specificationDTO = data;
      this.addSpecificationToRoutine(specificationDTO);
      });
  }
  */

  /*
 addSpecification() {
  if (this.name != '') {
    this.newExercise();
  } else if (this.selectedExercise != null) {
    this.reUseExercise();
  } 
}
  addSpecificationInfo(specificationDTO: SpecificationDTO) {
    specificationDTO.repetitions = this.repetitions;
    specificationDTO.secBreak = this.secBreak;
    specificationDTO.other = this.other;
    return specificationDTO;
  }
  */

  /*
  addSpecificationToRoutine(dto: SpecificationDTO) {
    this.specifications = this.routineService.currentRoutine.specifications;
    if (this.specifications == null) {
      this.specifications = new Array();
    }
    this.specifications.push(dto);
    console.log(this.specifications);
    this.routineService.currentRoutine.specifications = this.specifications;
  }
  */

 addSpecification() {
  let dto: SpecificationDTO = new SpecificationDTO();
  dto.repetitions = this.repetitions;
  dto.secBreak = this.secBreak;
  dto.other = this.other;
  let id = this.routineService.selectedRoutine.id;
  this.routineService.addSpecification(id, dto).subscribe(data =>{
    this.changed.emit();
    this.changeStatus();
  });
}

}
