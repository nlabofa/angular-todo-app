import { Component, OnInit } from '@angular/core';
import {TodoService} from './todo.service';


@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
})
export class TodosComponent implements OnInit {
add_todo:any;
todos:any;
oldText:any;
text:any;
appState = 'default';


  constructor(private _todoService: TodoService) { }

  ngOnInit() {
  	this.todos= this._todoService.getTodos();
  }
  //this gets the two way binding data from the form and push it to the todos array and adds it to localstorage via the addTodo service method
  addTodo() {
    var newTodo = {text: this.add_todo}
    this.todos.push(newTodo);
    this._todoService.addTodo(newTodo)
  }
  deleteTodo(todoText:string){
    for(var i=0; i < this.todos.length;i++){
      if(this.todos[i].text == todoText){
        this.todos.splice(i, 1);
      }
    }
    //this calls the localstorage delete method also so it saves the above delete method to storage
    this._todoService.deleteItem(todoText);
  }
  editTodo(todo:any) {
    this.appState = 'edit';
   this.oldText = todo.text;
    this.text = todo.text;
  }
  updateTodo() {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == this.oldText) {
        this.todos[i].text = this.text;
      }
    }
    this._todoService.update(this.oldText, this.text);
    this.text = '';
  }



}
