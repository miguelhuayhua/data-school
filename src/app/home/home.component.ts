import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animateInterval: boolean = true;
  constructor() {
    setInterval(() => {
      this.animateInterval = false;
      this.pPosition == this.phrases.length - 1 ? this.pPosition = 0 : this.pPosition++;
      this.animateInterval = true;
    }, 6000)
  }
  phrases: string[] = ['Ciencia de datos', 'Inteligencia Artificial', 'Lenguajes de programación', 'Estadística'];
  pPosition: number = 0;
  ngOnInit() {

  }

}
