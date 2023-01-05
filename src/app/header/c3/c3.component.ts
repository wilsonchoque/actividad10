import { TareaService } from './../../service/tarea.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {
  tarea='';
  descripcion='';
  constructor(private almacenarService:TareaService) { }

  enviar(){    
    this.almacenarService.almacenarTareas(this.tarea, this.descripcion);
  } 
}


