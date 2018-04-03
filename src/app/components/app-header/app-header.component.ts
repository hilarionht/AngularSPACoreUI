import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  notificaciones:number = 4;
  constructor() { }
}
