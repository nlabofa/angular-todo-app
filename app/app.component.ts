import { Component } from '@angular/core';
import { TodosComponent } from './todos.component';
import {TodoService} from './todo.service'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives:[TodosComponent],
  providers: [TodoService]
})
export class AppComponent {
  title = 'app works!';
}
