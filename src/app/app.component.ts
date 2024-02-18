import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { TablaComponent } from './component/tabla/tabla.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,FooterComponent,FormularioComponent,InicioComponent,TablaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicioCompletoFront';
}
