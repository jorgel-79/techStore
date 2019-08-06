import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    
   /* this.loginService.login('peter@klaven', 'cityslicka').subscribe(
      res => {
        console.log(res);      
    });*/

  }
  logIn(username,pasword){
    console.log(username,pasword);
    this.loginService.login(username,pasword).subscribe((
      respuestaServe
    )=>{
      console.log("Respuesta Login",respuestaServe);
      
    })
    return false
  }
}