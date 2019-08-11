import { Injectable } from '@angular/core';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { HttpClient } from '@angular/common/http';

import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageServece {

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(
      'https://first-project-526b6-168a3.firebaseio.com/recipes.json',
      recipes
      )
      .subscribe( response => {
        console.log(response);
      });
  }

  getRecipes() {
    this.http.get(
      'https://first-project-526b6-168a3.firebaseio.com/recipes.json'
    )
    .subscribe( response => {
      console.log( response );
    });
  }

  // fetchRecipes() {
  //   return this.authService.user.pipe(
  //     take(1),
  //     exhaustMap( user => {
  //       return this.http.get<Recipe[]>(
  //         'https://first-project-526b6-168a3.firebaseio.com/recipes.json?auth='
  //       );
  //     }),
  //     map(recipes => {
  //       return recipes.map( (recipe: Recipe) => {
  //         return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
  //       });
  //     }),
  //     tap( recipes => {
  //       this.recipeService.setRecipes(recipes);
  //     })
  //   );
  // }
  fetchRecipes() {
    return this.http.get<Recipe[]>(
      'https://first-project-526b6-168a3.firebaseio.com/recipes.json?'
    ).pipe(
      map(recipes => {
        return recipes.map( (recipe: Recipe) => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }),
      tap( recipes => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
