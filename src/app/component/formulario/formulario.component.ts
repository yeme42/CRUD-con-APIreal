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
  modificate: boolean = false;
  id: any 

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
    const formValues = this.form.value
    let body = {
      "nombre": form.value.nombre,
      "apellido": form.value.apellido,
      "telefono": form.value.telefono,
      "localidad": form.value.localidad
    }

      body.nombre = formValues.nombre;
      body.apellido = formValues.apellido;
      body.telefono = formValues.telefono;
      body.localidad = formValues.localidad;
  
      if(this.modificate){
        console.log("entro al modicate")
        this.service.actualizar(this.id, body).subscribe( resp =>{
          console.log(resp)
          this.valores()
          this.modificate = false
        
            },
            (error:any) =>{
              alert("Ocurrio un error en actualizar")
            }
            )
          this.form.reset()
      }else{
        this.service.agregar(body).subscribe(data =>{
          this.valores()
        },
        (error:any) =>{
          alert("Ocurrio un error al intentar agregar")
        }
        )
      this.form.reset()
      }
    
      
    }

  valores(){
      this.service.obtener().subscribe(resp =>{
        this.datos = resp
        console.log("estoy viene ", resp)
      })
    }

    prueba(data:any){
      this.modificate = true
      this.id = data.id
      let { nombre, apellido, telefono, localidad} = data.body;
    console.log(data.body);
    this.form.patchValue({
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      localidad: localidad
    });
      console.log("si esta llegando desde el componente tabla", data.body)
    }

  }

