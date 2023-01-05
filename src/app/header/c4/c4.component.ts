import { TareaService } from './../../service/tarea.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component {

  almacenTareas:string[]=[]
  

  constructor(private almacenService:TareaService) { }

  ngOnInit(): void {
    this.almacenTareas=this.almacenService.TareasyDescripcion
  }

}
