import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './component/inicio/inicio.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
;


const routes: Routes = [
  {path: 'inicio', component: InicioComponent },
  {path: 'formulario', component: FormularioComponent},
  {path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
