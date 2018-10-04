import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RoutineService } from '../../Service/RoutineService';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.css']
})
export class UserSpaceComponent implements OnInit {

  //@ViewChild('child1') dashboard: DashboardComponent;

  loggedInUser: string = localStorage.getItem('user');
  
  //showNewRoutine = false;
  

  constructor(private router: Router, private routineService: RoutineService) { }

  ngOnInit() {
    if (localStorage.length == 0 || localStorage.getItem('loginStatus') != 'ingelogd' ) {
      this.router.navigateByUrl('login');
      //this.dashboard.updateRoutines();
    }
  }

  logout() {
    localStorage.removeItem('loginStatus');
    this.router.navigateByUrl('login');
  }

  /*
  newRoutine() {
    this.showNewRoutine = this.routineService.showMakeNewRoutine();
  }
  */



}
