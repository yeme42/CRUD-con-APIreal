import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { conexionService } from '../../conexio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit {

  @Input() data:any = []

  constructor(private service: conexionService
){

}


  ngOnInit(): void {

  }

  deleteEvent(id: any){
    this.service.delete(id).subscribe((resp)=>{
    },
    (error)=>{
      console.log(error)
    })
  }

}
