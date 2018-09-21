import { Component, OnInit } from '@angular/core';
import { LoginDTO } from '../../model/LoginDTO';
import { LoginService } from '../../Service/LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username: string;
  password: string;

  constructor(private service: LoginService) { }

  ngOnInit() {
    localStorage.setItem('loginStatus' , 'nietingelogd');
  }




  login() {
    localStorage.setItem('loginStatus' , 'ingelogd');
    this.nextPage();
  }


  nextPage() {
    if (localStorage.getItem('loginStatus') == 'ingelogd' ) {
      alert('if is true');
      
    }
  }

  }
