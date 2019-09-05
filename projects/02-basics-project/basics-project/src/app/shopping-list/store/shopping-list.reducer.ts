import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('Whole Chicken', 1),
    new Ingredient('thyme', 2)
  ]
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.AddIngredient
  ) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ingredients: [ ...state.ingredients, action.payload ]
      };
    default:
      return state;
  }
}
