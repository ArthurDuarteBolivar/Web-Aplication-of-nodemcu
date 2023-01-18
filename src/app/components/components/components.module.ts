import { DarkModeComponent } from './../dark-mode/dark-mode.component';
import { ArrowBackComponent } from './../arrow-back/arrow-back.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    ArrowBackComponent,
    DarkModeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatIconModule

  ],
  exports: [
    ArrowBackComponent,
    DarkModeComponent,
  ]
})
export class ComponentsModule { }
