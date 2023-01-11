import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'home',
      component: HomeComponent,
      title: 'Home - Data School Bolivia'
    },
    {
      path: 'about',
      component: NosotrosComponent,
      title: 'Nosotros - Data School Bolivia'
    },
    {
      path: 'courses',
      component: CursosComponent,
      title: 'Cursos - Data School Bolivia'
    },
    {
      path: 'contact',
      component: ContactoComponent,
      title: 'Contáctanos - Data School Bolivia'
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }