import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { RegisterService } from '../Service/RegisterService';
import { LoginService } from '../Service/LoginService';

import { RegisterComponent } from './register/register.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { UserSpaceComponent } from './user-space/user-space.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { ExerciseDTO } from '../model/ExerciseDTO';
import { ExerciseService } from '../Service/ExerciseService';
import { SpecificationService } from '../Service/SpecificationService';
import { RoutineService } from '../Service/RoutineService';




const appRoutes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userspace', component: UserSpaceComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FrontpageComponent,
    UserSpaceComponent,
    CreateExerciseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RegisterService,
    LoginService,
    ExerciseService,
    RoutineService,
    SpecificationService,
    FormBuilder

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
