import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  displayedRecipe: Recipe;
  name: string;
  id: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipeById();
  }

  onSendToShoppingList(ingredients: Ingredient[]) {
    console.log('heeyo!');
    this.shoppingListService.setIngredients(ingredients);

    // We may not want to navigate immediately to /shopping-list
    // this.router.navigate(['shopping-list']);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }

  private getRecipeByUrlParam() {
    let id: string;
    this.activatedRoute.paramMap.subscribe(
      (params: Params) => {
        id = params.get('id');
        this.displayedRecipe = this.recipeService.getRecipes().filter( elem => elem.name === id)[0];
      }
    );
  }

  private getRecipeById() {
    this.activatedRoute.paramMap.subscribe(
      (params: Params) => {
        this.id = +params.get('id');
        this.displayedRecipe = this.recipeService.getRecipeById(this.id);
      }
    );
  }

  onDeleteIngredients() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
