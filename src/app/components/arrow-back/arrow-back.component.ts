import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow-back',
  templateUrl: './arrow-back.component.html',
  styleUrls: ['./arrow-back.component.scss']
})
export class ArrowBackComponent {


  constructor(private locate: Location){}

  back(){
    this.locate.back()
  }

}
