import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <h1 class="app-title">Welcome to {{ title }}!</h1>
    <app-list-manager></app-list-manager>
  `,
})
export class AppComponent {
  title = 'My ToDo List App';
}
