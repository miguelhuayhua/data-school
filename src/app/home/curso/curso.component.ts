import { Component, Input } from '@angular/core';
import { Curso } from 'src/app/type';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent {
  @Input() curso: Curso = {
    aprendizaje: [],
    banner: '', costo: 0,
    descripcion: '',
    dias: [],
    hora: '',
    id: 0,
    inicio: '',
    nombre: '',
    nombre_doc: '',
    requisitos: '',
    tipo: '',
    url: ''
  }
}
