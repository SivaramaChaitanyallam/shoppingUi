import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerObj:Register;
 constructor(private http:HttpClient){
    this.registerObj=new Register();
 }
 onLogin(){
  debugger;
  this.http.post('https://localhost:44359/api/Login/register',this.registerObj).subscribe((res:any)=>{
   if(res==true){
     alert("register sucess")
   } else{
     alert("register failed")
   }
  })
}
}

export class Register{
  username:string;
  email:string;
  password:string;
  constructor(){
    this.username='';
    this.email='';
    this.password='';
  }
}
