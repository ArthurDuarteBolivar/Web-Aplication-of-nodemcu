import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components/components.module';
import { MaquinasComponent } from './../maquinas/maquinas.component';
import { LoginComponent } from './../login/login.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    MaquinasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ComponentsModule,
    RouterModule
  ]
})
export class PagesModule { }
