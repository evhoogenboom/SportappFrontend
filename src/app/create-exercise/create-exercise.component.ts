import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../Service/ExerciseService';
import { ExerciseDTO } from '../../model/ExerciseDTO';
import { SpecificationDTO } from '../../model/SpecificationDTO';
import { SpecificationService } from '../../Service/SpecificationService';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserSpaceComponent } from '../user-space/user-space.component';
import { RoutineService } from '../../Service/RoutineService';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})

export class CreateExerciseComponent implements OnInit {
  countryForm: FormGroup;

 

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
   specifications: SpecificationDTO[];

  
  
  constructor(private exerciseService: ExerciseService, 
    private specificationService: SpecificationService, private routineService: RoutineService) { }


  ngOnInit() {
   this.loadExercises();
  }


  loadExercises() {
    this.exerciseService.findAllExercises().subscribe(data => {
      this.exercises = data;
      });
  }

  addSpecification() {
    if (this.name != '') {
      this.newExercise();
    } else if (this.selectedExercise != null) {
      this.reUseExercise();
    } 
  }
  
  reUseExercise() {
    alert('reuse exercise');
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

  saveSpecification(exerciseDTO: ExerciseDTO) {
    let specificationDTO = new SpecificationDTO();
    specificationDTO.exercise = exerciseDTO;
    specificationDTO = this.addSpecificationInfo(specificationDTO);
    this.specificationService.save(specificationDTO).subscribe(data => {
      specificationDTO = data;
      this.addSpecificationToRoutine(specificationDTO);
      });
  }

  addSpecificationInfo(specificationDTO: SpecificationDTO) {
    specificationDTO.repetitions = this.repetitions;
    specificationDTO.secBreak = this.secBreak;
    specificationDTO.other = this.other;
    return specificationDTO;
  }

  addSpecificationToRoutine(dto: SpecificationDTO) {
    this.specifications = this.routineService.currentRoutine.specifications;
    if (this.specifications == null) {
      this.specifications = new Array();
    }
    this.specifications.push(dto);
    console.log(this.specifications);
    this.routineService.currentRoutine.specifications = this.specifications;
  }


}
