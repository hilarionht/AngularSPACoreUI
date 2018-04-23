import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';
import { LoginComponent } from './views/pages/login.component';
import { RegisterComponent } from './views/pages/register.component';
import { LoginGuard } from './services/service.index';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'login'} },
  { path: 'register', component: RegisterComponent , data: { title: 'register'}},
  { path: '',   
    component: FullLayoutComponent,    
    canActivate: [LoginGuard], 
    // data: { title: 'Pages'  },  
     loadChildren: './views/pages/pages.module#PagesModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
