import { ActionReducerMap } from '@ngrx/store';
import { validFilters } from './filter/filter.actions';
import { ToDo } from './models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filter/filter.reducer';


export interface AppState {
    todos: ToDo[],
    filter: validFilters
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}