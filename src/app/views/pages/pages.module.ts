import { NgModule } from '@angular/core';

import { P404Component } from './404.component';

// import { PagesRoutingModule } from './pages-routing.module';
import { ServiceModule } from '../../services/service.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../../pipes/pipes.module';
import { PAGES_ROUTES } from './pages.routes';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [ 
    CommonModule,
    // PagesRoutingModule ,
    PAGES_ROUTES, 
    ServiceModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
],
  declarations: [
    UsuariosComponent,
    ProfileComponent,
    P404Component
  ]
})
export class PagesModule { }
