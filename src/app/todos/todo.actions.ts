import { createAction, props } from '@ngrx/store';

export const crearToDo = createAction(
    '[ToDo] Crear ToDo',
    props<{text: string}>()
);

export const toogle = createAction(
    '[ToDo] Toggle ToDo',
    props<{id: number}>()
);

export const editToDo = createAction(
    '[ToDo] Edit ToDo',
    props<{ id: number, text: string }>()
);

export const deleteToDo = createAction(
    '[ToDo] Delete ToDo',
    props<{ id: number }>()
);

export const clearCompleted = createAction(
    '[ToDo] Clear Completed ToDo'
)

export const toogleAll = createAction(
    '[ToDo] ToggleAll ToDo',
    props<{ completed: boolean }>()
);