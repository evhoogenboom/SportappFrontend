import { Component, OnInit } from '@angular/core';
import { RegisterDTO } from '../../model/RegisterDTO';
import { RegisterService } from '../../Service/RegisterService';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
  

export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  

  constructor(private service: RegisterService) { }

  ngOnInit() {
  }

  dto = new RegisterDTO;
  
  save() {
    this.dto.username = this.username;
    this.dto.password = this.password;
    this.service.save(this.dto).subscribe(data => {});
  }





}
