import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public carttoal=0;
  public cartitemlist:any=[]
  public productlist=new BehaviorSubject<any>([]);

  constructor() { }
  
 getproducts(){
  return this.productlist.asObservable();
 }
 setproduct(product:any){
  this.cartitemlist.push(...product);
  this.productlist.next(product);
 }
addtocart(product:any){
  this.cartitemlist.push(product);
  this.productlist.next(this.cartitemlist);
  this.gettotalprice();
  this.cardtotal();
  console.log(this.cartitemlist);
}
gettotalprice(){
  let grandtotal=0;
  this.cartitemlist.map((a:any)=>{
    grandtotal+=a.total;
  })
}
cardtotal(){
  this.cardtotal=this.cartitemlist.val;
  console.log(this.cardtotal);
}
removeItem(index: number){
  this.cartitemlist.splice(index, 1);
  return index;
}








  // add(data:any){
  //   this.items.push(data);
  // }
  // getItem(){
  //   return this.items;
  // }
}
