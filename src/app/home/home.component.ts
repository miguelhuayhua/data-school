import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  phrases: string[] = ['Ciencia de datos', 'Inteligencia Artificial', 'Lenguajes de programación', 'Estadística'];
  pPosition: number = 0;
  ngOnInit() {
    setInterval(() => {
      this.pPosition == this.phrases.length-1 ? this.pPosition = 0 : this.pPosition++;
    }, 6000)
  }

}
