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
import { DataTablesModule } from 'angular-datatables';
import { TipoProductoComponent } from './producto/tipo-producto.component';
import { ProductosComponent } from './producto/productos.component';
import { TipoProductosComponent } from './producto/tipo-productos.component';
import { MarcaComponent } from './marca/marca.component';
import { MarcasComponent } from './marca/marcas.component';
import { ModeloComponent } from './modelo/modelo.component';
import { ModelosComponent } from './modelo/modelos.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  imports: [ 
    CommonModule,
    PAGES_ROUTES, 
    ServiceModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    DataTablesModule
],
  declarations: [
    UsuariosComponent,
    ProfileComponent,
    P404Component,
    TipoProductoComponent,
ProductoComponent,
    ProductosComponent,
    TipoProductosComponent,
    MarcaComponent,
    MarcasComponent,
    ModeloComponent,
    ModelosComponent
  ]
})
export class PagesModule { }
