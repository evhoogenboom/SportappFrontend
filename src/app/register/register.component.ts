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

  save() {
    let dto = new RegisterDTO();
    dto.username = this.username;
    dto.password = this.password;
    this.service.save(dto).subscribe(data => {});
  }





}
