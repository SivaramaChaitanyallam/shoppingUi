import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit{
public productlist:any;
carditem=0;
constructor(private api:ApiserviceService,private cartservice:CartService ){}
  ngOnInit(): void {
    this.api.getproduct()
    .subscribe(res=>{
      this.productlist=res;
      this.productlist.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      })
    })
  }
  addtocart(item:any){
   this.cartservice.addtocart(item);
  }
  // handlequantity(val:string){
  //     if(this.carditem < 20 && val==='plus'){
  //       this.carditem+=1;
  //     }else if(this.carditem>1 && val==='min'){
  //       this.carditem-=1;
  //     }
  //   }
}
