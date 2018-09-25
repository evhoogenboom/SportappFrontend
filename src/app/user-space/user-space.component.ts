import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.css']
})
export class UserSpaceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.length == 0 || localStorage.getItem('loginStatus') != 'ingelogd' ) {
      this.router.navigateByUrl('login');
    }
  }

  logout() {
    localStorage.removeItem('loginStatus');
    this.router.navigateByUrl('login');
  }





}
