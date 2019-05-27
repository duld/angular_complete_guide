import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'testRecipe',
      'this is only a test',
      'http://1.bp.blogspot.com/_CUt4eLzIm2U/TTz1EjQedoI/AAAAAAAAAeA/hsieb1YGSM4/s1600/IMG_2067.JPG'),
    new Recipe(
      'testRecipe 2',
      'One more recipe',
      'http://1.bp.blogspot.com/_CUt4eLzIm2U/TTz1EjQedoI/AAAAAAAAAeA/hsieb1YGSM4/s1600/IMG_2067.JPG')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
