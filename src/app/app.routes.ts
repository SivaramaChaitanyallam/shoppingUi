import { Routes } from '@angular/router';
import path from 'path';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartitemsComponent } from './cartitems/cartitems.component';




export const routes: Routes = [
   
   { path:'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},
    {path:'',component:ProductlistComponent},
    {path:'home',component:HomeComponent},
    {path:'cart',component:CartitemsComponent}
   
  
];
