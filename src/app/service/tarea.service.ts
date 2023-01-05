import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  TareasyDescripcion:string[]=[]
  almacenarTareas(tarea:string,descripcion:string){
      this.TareasyDescripcion.push(tarea+': '+descripcion)
  }


  constructor() { }
}
