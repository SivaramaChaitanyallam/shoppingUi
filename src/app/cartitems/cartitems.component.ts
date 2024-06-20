import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { retryWhen } from 'rxjs';

@Component({
  selector: 'app-cartitems',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cartitems.component.html',
  styleUrl: './cartitems.component.css'
})
export class CartitemsComponent {
  public cartitemlist:any=[]
  public cardid:any=[]

 constructor(private cartitem:CartService,private http:HttpClient){
  
    this.cartitem.getproducts()
   .subscribe(res=>{
    this.cartitemlist=res;
   // console.log(this.cartitemlist)
   })
  }
  removeItem(index: number) {
    this.cartitem.removeItem(index);
}
submitodb(){
this.cartitem.getproducts()
.subscribe(res=>{
  res.forEach(element => {
    let reqbody={
      id:element.id,
      title:element.title,
      price: element.price,
      description:element.description,
      category:element.category,
      image:element.image,
      
    }
    console.log(reqbody)
    this.http.post('https://localhost:44359/api/Login/carttoDB',reqbody).subscribe((res:any)=>{
      console.log(res)
      
      if(res==true){
        alert("sucess")
        
      } else{
        alert(" failed")
       
      }
     })
    
  });
  
})
 
  

  
}

}

   
