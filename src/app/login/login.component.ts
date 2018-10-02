import { Component, OnInit } from '@angular/core';
import { LoginDTO } from '../../model/LoginDTO';
import { LoginService } from '../../Service/LoginService';
import { Router } from '@angular/router';
import { parseHttpResponse } from 'selenium-webdriver/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username: string;
  password: string;

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit() {
  }



  login(){
    var users;
    var username;
    var password;
    var id;
    
    this.service.findUser(this.username).subscribe( data => {
      users = data;
      username = users[0].username;
      password = users[0].password;
      id = users[0].id;
      this.checkLogin(username, password, id);
    });
  }

  checkLogin(username: string, password: string, id: number) {    
    if (this.username == username && this.password == password) {
        localStorage.setItem('loginStatus' , 'ingelogd');
        localStorage.setItem('user' , username);
        localStorage.setItem('id', ''+id);
        this.router.navigateByUrl('userspace');
      } else {
        alert('Invalid login');
        this.username = '';
        this.password = '';
      }
  }

  }
