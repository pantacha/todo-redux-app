import { createAction, props } from "@ngrx/store";

export type validFilters = 'All' | 'Active' | 'Completed';

export const setFilter = createAction(
    '[Filter] Set Filter',
    props<{filter: validFilters}>()
);