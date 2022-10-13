import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filter/filter.actions';
import { ToDo } from '../models/todo.model';

@Pipe({
  name: 'filterToDo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: ToDo[], filter: validFilters): ToDo[] {

    switch(filter){
      case 'Active':
        return todos.filter((todo) => !todo.completed);
      case 'Completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }

}
