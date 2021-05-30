import { createReducer, on } from "@ngrx/store";
import { updateNavState } from "./tax-actions";
import { taxNavigation } from "./tax-state";
const _createTaxReducer = createReducer(
  taxNavigation,
  on(updateNavState, (state, { navigation }) => ({
    ...state,
    navigation: navigation,
  }))
);

export function TaxReducer(state, action) {
  return _createTaxReducer(state, action);
}
