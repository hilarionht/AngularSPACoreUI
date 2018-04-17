import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P404Component } from './404.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',  data: { title: 'Example Pages' },
    children: [
      { path: '404',   component: P404Component,  data: { title: 'Page 404'  }},
      { path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Mantenimiento de Usuario' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
