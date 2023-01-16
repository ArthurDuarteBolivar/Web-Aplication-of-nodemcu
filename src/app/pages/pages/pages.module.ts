import { MaquinasComponent } from './../maquinas/maquinas.component';
import { LoginComponent } from './../login/login.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    MaquinasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
