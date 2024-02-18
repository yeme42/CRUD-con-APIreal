import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { conexionService } from '../../conexio.service';
import { TablaComponent } from '../tabla/tabla.component';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ ReactiveFormsModule, TablaComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent{
  
  form!:FormGroup
  editarForm: boolean = false
  datos: any = []

constructor(private fb:FormBuilder,
  private service: conexionService){
  this.crearFormulario()
  this.valores()
}



  crearFormulario(){
    this.form = this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(5)]],
      apellido:['',[Validators.required]],
      telefono:['',[Validators.email,Validators.required]],
      localidad:['',Validators.required],
    });
}

  enviar(form:any){
    console.log("Aca tienes los datos", this.form)

    let body = {
      "nombre": form.value.nombre,
      "apellido": form.value.apellido,
      "telefono": form.value.telefono,
      "localidad": form.value.localidad
    }
    
    this.service.agregar(body).subscribe(data =>{
        },
        (error:any) =>{
          alert("hubo un error")
        }
        )
      this.form.reset()
      
    }

  valores(){
      this.service.obtener().subscribe(resp =>{
        this.datos = resp
        console.log("estoy viene ", resp)
      })
    }

    actualizar(id:any, body:any){
      this.service.actualizar(id, body).subscribe( resp =>{
        console.log(resp)
      })

    }
    prueba(body:string){
      alert("si esta llegando desde el componente tabla"+ body)
    }

  }

