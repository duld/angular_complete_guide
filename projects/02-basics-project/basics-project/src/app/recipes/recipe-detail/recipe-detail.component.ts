import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() displayedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  loadSelectedRecipe(recipe: Recipe) {
    console.log('recipe-detail');
    console.log(recipe);
  }

  onSendToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.setIngredients(ingredients);
  }

}
