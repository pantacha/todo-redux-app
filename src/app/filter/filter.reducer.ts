import { Action, createReducer, on } from '@ngrx/store';
import { ToDo } from '../models/todo.model';
import { setFilter, validFilters } from './filter.actions';

export const initialState: validFilters = 'All';

export const _filterReducer = createReducer(
    initialState,
    on(setFilter, (state, {filter}): any => filter)
)

export const filterReducer = (state: any, action: any) => {
   return _filterReducer(state, action);
}