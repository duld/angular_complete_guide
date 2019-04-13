import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('testRecipe', 'this is only a test', 'http://1.bp.blogspot.com/_CUt4eLzIm2U/TTz1EjQedoI/AAAAAAAAAeA/hsieb1YGSM4/s1600/IMG_2067.JPG'),
    new Recipe('testRecipe 2', 'One more recipe', 'http://1.bp.blogspot.com/_CUt4eLzIm2U/TTz1EjQedoI/AAAAAAAAAeA/hsieb1YGSM4/s1600/IMG_2067.JPG')
  ];

  constructor() { }

  ngOnInit() {
  }

}
