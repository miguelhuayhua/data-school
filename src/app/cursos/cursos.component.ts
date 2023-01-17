import { Component } from '@angular/core';
import { Curso } from '../type';
import { DataService } from '../data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [];
  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    this.cursos = this.data.getData();
  }
}
