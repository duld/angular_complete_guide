import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {
    // this.selectedRecipe = new Recipe('Select a Recipe', 'Recipe description', 'default')
   }

  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

}
