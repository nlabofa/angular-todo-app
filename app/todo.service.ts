import { Injectable } from '@angular/core';
import {Init} from './init-todos';

@Injectable()
export class TodoService extends Init{

  constructor() {
  	super();
  	console.log('service initialized....');
  	this.load();

   }
 getTodos(){
  	var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  } 
  addTodo(newTodo:any){
  var todos = JSON.parse(localStorage.getItem('todos'));
  	todos.push(newTodo);
  	localStorage.setItem('todos', JSON.stringify(todos));
  }
   deleteItem(todoText:string) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].text == todoText) {
        todos.splice(i, 1);
      }
    }
    //Set new iteem
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  update(oldText:any, newText:any) {
    var todos = JSON.parse(localStorage.getItem('todos'));

    for (var i = 0; i < todos.length; i++) {
      if (todos[i].text == oldText) {
          todos[i].text = newText;
      }
    }
    //Set new iteem
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
