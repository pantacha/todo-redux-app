import { Action, createReducer, on } from '@ngrx/store';
import { ToDo } from '../models/todo.model';
import { clearCompleted, crearToDo, deleteToDo, editToDo, toogle, toogleAll } from './todo.actions';

export const initialState: ToDo[] = [];

const _todoReducer = createReducer(
    initialState,

    on(crearToDo, (state, { text }) => [...state, new ToDo(text)]),

    on(deleteToDo, (state, { id }) => state.filter((item) => item.id !== id)),

    on(clearCompleted, (state) => state.filter((item) => !item.completed)),

    on(toogleAll, (state, { completed }) => state.map((item) => {
        return {
            ...item,
            completed
        }
    })),
    
    on(toogle, (state, { id }): any => {
        return state.map((item) => {
            if(item.id===id){
                return {
                    ...item,
                    completed: !item.completed
                }
            }else{
                return item;
            }
        });
    }),

    on(editToDo, (state, { id, text }): any => {
        return state.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    text
                }
            } else {
                return item;
            }
        });
    }),
);

export const todoReducer = (state: any, action: any) => {
    return _todoReducer(state, action);
}