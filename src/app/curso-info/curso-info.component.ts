import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { Curso } from '../type';
@Component({
  selector: 'app-curso-info',
  templateUrl: './curso-info.component.html',
  styleUrls: ['./curso-info.component.scss']
})
export class CursoInfoComponent implements OnInit {
  curso: Curso = {
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
  constructor(private activatedRoute: ActivatedRoute,
    private meta: Meta,
    private title: Title,
    private data: DataService) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      let url = (data as { id: string }).id;
      this.curso = this.data.getData().find((current, i) => {
        return current.url == url;
      })!;
    })
  }

  downloadPdf() {
    var link = document.createElement('a');
    link.href = '../assets/pdf.pdf'
    link.download = 'pdf.pdf';
    link.dispatchEvent(new MouseEvent('click'));

  }
}
