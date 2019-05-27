import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Turkey & Beef - Chili',
      'A Paleo version of a family classic.',
      'http://1.bp.blogspot.com/_CUt4eLzIm2U/TTz1EjQedoI/AAAAAAAAAeA/hsieb1YGSM4/s1600/IMG_2067.JPG',
      [
        new Ingredient('Ground Turkey', 1),
        new Ingredient('Ground Beef', 1),
        new Ingredient('Chili Powder', 8),
        new Ingredient('Cumin', 2),
        new Ingredient('Yellow Onion', 2),
        new Ingredient('Green Bell Pepper', 2),
        new Ingredient('Red Bell Pepper', 2)
      ]),
    new Recipe(
      'BBQ Pork Riblets',
      'A smokey BBQ recipe at a low cost',
      'http://2.bp.blogspot.com/-GAhlQTm6zik/To3B7GsWrII/AAAAAAAAOZU/9baswF31p-4/s1600/010.JPG',
      [
        new Ingredient('Pork Riblets', 5),
        new Ingredient('Smokey BBQ Rub', 1),
        new Ingredient('Yello Mustard', 5),
        new Ingredient('BBQ Sauce', 3)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
