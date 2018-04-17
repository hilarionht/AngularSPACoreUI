import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit{
  
  
  notificaciones:number = 9;
  usuario:Usuario
  constructor(public _userService: UsuarioService) { 
  
  }

  ngOnInit() {
    console.log("execute");
    
    this.usuario = this._userService.usuario;
  }
}
