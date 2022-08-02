import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './register/register.component';

import { LoginComponent } from './login/login.component';

import { AddtaskComponent } from './addtask/addtask.component';

import { ListtaskComponent } from './listtask/listtask.component';

import { EdittaskComponent } from './edittask/edittask.component';

 



const routes: Routes = [

  {path:'home', component:HomeComponent},

  {path:'register', component:RegisterComponent},

  {path:'login', component:LoginComponent},

  {path:'addtask', component:AddtaskComponent},

  {path:'listtask', component:ListtaskComponent},

  {path:'edittask', component:EdittaskComponent},

   
  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
