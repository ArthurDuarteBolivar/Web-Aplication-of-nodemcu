import { Nodemcu } from './interfaces/nodemcu';
import { NodemcuApiService } from './services/nodemcu-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'nodemcu-aplication';

  constructor(private service: NodemcuApiService){}
  results: Nodemcu[] = []
  ngOnInit(): void {
    this.service.get().subscribe(res => this.results = res)
  }
}
