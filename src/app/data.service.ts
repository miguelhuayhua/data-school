
import { Injectable } from '@angular/core';
import { Curso, cursos } from './type';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: Curso[] = cursos;
  constructor() {

  }
  getData(): Curso[] {
    return this.data;

  }
}
