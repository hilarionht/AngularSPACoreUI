import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(public _userService: UsuarioService,public router: Router, public activatedRoute:ActivatedRoute) { }

  login( forma: NgForm) {
    if(forma.invalid) {
      return;
    }
    
    let usuario = new Usuario(null, forma.value.email, forma.value.password);
    this._userService.login(usuario).subscribe(() => this.router.navigate(['/usuarios']));
   
  }
  register(){
    this.router.navigate(['/register']);
  }
}
