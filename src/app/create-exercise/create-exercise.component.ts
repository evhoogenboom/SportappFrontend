import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../Service/ExerciseService';
import { ExerciseDTO } from '../../model/ExerciseDTO';
import { SpecificationDTO } from '../../model/SpecificationDTO';
import { SpecificationService } from '../../Service/SpecificationService';
import { FormBuilder, FormGroup } from '@angular/forms';

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
   
  
  
  constructor(private exerciseService: ExerciseService, 
    private specificationService: SpecificationService) { }


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
      });
  }


  addSpecificationInfo(specificationDTO: SpecificationDTO) {
    specificationDTO.repetitions = this.repetitions;
    specificationDTO.secBreak = this.secBreak;
    specificationDTO.other = this.other;
    return specificationDTO;
  }

 





}
