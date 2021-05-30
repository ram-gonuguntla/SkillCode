import { createAction, props } from "@ngrx/store";
export const updateNavState = createAction(
  "updateNavState",
  props<{ navigation: boolean }>()
);
