import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class ModalUploadService {

  public tipo: string;
  public id: string;
  public titulo: string;
  public oculto: string = 'oculto';

  public notificacion = new EventEmitter<any>();

  constructor() { 
    console.log('modal listo');
    
  }

  ocultarModal() {
    this.oculto = 'oculto';
    this.tipo = null;
    this.id = null;
    this.titulo = '';
  }

  mostrarModal( tipo: string, id: string, titulo: string='Subir Imagen' ) {
    console.log('imagen');
    
    this.oculto = '';
    this.id = id;
    this.tipo = tipo;
    this.titulo = titulo;
  }

}
