import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToDo } from '../../models/todo.model';
import { AppState } from '../../app.reducer';
import * as actions from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: ToDo[] = [];
  filterSelected: actions.validFilters;

  constructor(private store: Store<AppState>) {

    
  }
  
  ngOnInit(): void {
    // this.store.select('todo').subscribe((todos) => this.todos = todos);
    this.store.subscribe(({filter, todos}) => {
      this.todos = todos;
      this.filterSelected = filter;
    })
  }

}
