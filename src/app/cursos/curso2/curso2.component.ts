import { Component, Input } from '@angular/core';
import { Curso } from 'src/app/type';

@Component({
  selector: 'app-curso2',
  templateUrl: './curso2.component.html',
  styleUrls: ['./curso2.component.scss']
})
export class Curso2Component {
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
