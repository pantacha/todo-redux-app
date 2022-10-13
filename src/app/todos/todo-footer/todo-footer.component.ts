import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as filterActions from '../../filter/filter.actions';
import { AppState } from '../../app.reducer';
import * as todosActions from '../../todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filterSelec: filterActions.validFilters = 'All'
  filters: filterActions.validFilters[] = ['All', 'Active', 'Completed'];

  itemsLeft: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filter').subscribe((item) => {
    //   this.filterSelec = item;
    // })
    this.store.subscribe((item) => {
      this.filterSelec = item.filter;
      this.itemsLeft = item.todos.filter((elem) => !elem.completed).length;
    });
  }

  changeFilter(filter: filterActions.validFilters) {
    this.store.dispatch(filterActions.setFilter({filter}));
  }

  clearCompleted(){
    this.store.dispatch(todosActions.clearCompleted());
  }

}
