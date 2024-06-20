import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, inject, output } from '@angular/core';
import { privateDecrypt } from 'node:crypto';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { EventEmitter } from 'node:stream';
import { CartService } from '../service/cart.service';
import { Login, LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
  
   
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  carditem=0;
 cartservice=inject(CartService);
  user:any;
 

  private url=' https://fakestoreapi.com/products/';
  data :any;
  
  getpost(){
    return this.httpClient.get(this.url);
  }
  constructor(private httpClient:HttpClient ) {
   
  }
 
  // ngOnInit() {
  //   this.getpost().subscribe(res=>{
  //     this.data=res;
  //   })
  // }
  // handlequantity(val:string){
  //   if(this.carditem < 20 && val==='plus'){
  //     this.carditem+=1;
  //   }else if(this.carditem>1 && val==='min'){
  //     this.carditem-=1;
  //   }
  // }
  
  add(data){
    this.cartservice.addtocart(data);
  }
  
}


