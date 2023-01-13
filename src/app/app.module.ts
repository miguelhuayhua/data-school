import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './static/navbar/navbar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './static/footer/footer.component';
import { CursoComponent } from './home/curso/curso.component';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { CursoInfoComponent } from './curso-info/curso-info.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NosotrosComponent,
    CursosComponent,
    ContactoComponent,
    FooterComponent,
    CursoComponent,
    CursoInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatStepperModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
