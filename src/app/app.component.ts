import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CartService } from './service/cart.service';
import { Login, LoginComponent } from './login/login.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
  
    
   RouterLink,RouterLinkActive,
   MatToolbarModule,MatButtonModule, MatDividerModule, MatIconModule
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shoppingUi';
  public totalitem:number=0;
 public user='ram';
  constructor(private cardservice:CartService){
   //this.cardtot=cardservice.cardtotal();
   //this.user=login.loginObj.username;
   this.cardservice.getproducts()
   .subscribe(res=>{
    this.totalitem=res.length;
   })
  }
}
