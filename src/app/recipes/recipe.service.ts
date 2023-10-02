import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'Recipe 1 Description',
      'https://images.squarespace-cdn.com/content/v1/598785e8f9a61e3bd68fb96f/1675118379526-FEEAL3NLEX1Z5CHAASOP/chicken-with-currants-olives-and-herbs.png?format=1000w'
    ),
    new Recipe(
      'Recipe 2',
      'Recipe 2 Description',
      'https://images.squarespace-cdn.com/content/v1/598785e8f9a61e3bd68fb96f/1675118379526-FEEAL3NLEX1Z5CHAASOP/chicken-with-currants-olives-and-herbs.png?format=1000w'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
