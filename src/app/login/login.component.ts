import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:Login;
  user:any;
 
  constructor(private http:HttpClient,private _router:Router){
    this.loginObj=new Login();
  }
  onLogin(){
    debugger;
    this.http.post('https://localhost:44359/api/Login',this.loginObj).subscribe((res:any)=>{
     if(res==true){
      this._router.navigateByUrl(' ',this.user);
      this.user=res.username
       
     } else{
       alert("login failed")
     }
    })
  }
}
export class Login{
  username:string;
  password:string;
  constructor(){
    this.username='';
    this.password='';
  }
}

