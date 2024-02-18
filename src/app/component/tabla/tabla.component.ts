import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { conexionService } from '../../conexio.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit {

  @Input() data:any = []
  @Output() actualizarEvento = new EventEmitter()

  constructor(private service: conexionService
){

}


  ngOnInit(): void {

  }

update(body:string , id:any){
  this.actualizarEvento.emit(body)
  console.log("aqui se envio algo")
}

  deleteEvent(id: any){
    this.service.delete(id).subscribe((resp)=>{
      console.log("se elimino esto ", resp)
    },
    (error)=>{
      console.log(error)
    })
  }

}
