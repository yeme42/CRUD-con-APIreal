import { Routes,  } from '@angular/router';
import { FormularioComponent } from './component/formulario/formulario.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent },
    {path: 'formulario', component: FormularioComponent },
    {path: '**', component: PageNotFoundComponent },
    ];