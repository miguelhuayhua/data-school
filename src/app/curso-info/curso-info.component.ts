import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-curso-info',
  templateUrl: './curso-info.component.html',
  styleUrls: ['./curso-info.component.scss']
})
export class CursoInfoComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
    private meta: Meta,
    private title: Title) {
  }
  ngOnInit() {
    this.title.setTitle('El pepe')
  }
}