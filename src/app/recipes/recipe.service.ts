import { Ingredient } from './../shared/ingredients.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti Carbonara',
      'A classic Roman pasta dish with creamy sauce and crispy bacon.',
      'https://cdn-rdb.arla.com/Files/puckarabia-en/2467521664/a8adc6bf-52a6-4428-ae42-5a59697a226c.jpg?w=1230&h=670&mode=crop&ak=aee88f72&hm=5f828870',
      [
        new Ingredient('Spaghetti', 200),
        new Ingredient('Eggs', 2),
        new Ingredient('Parmesan Cheese', 50),
        new Ingredient('Guanciale or Pancetta', 100),
        new Ingredient('Black Pepper', 1),
      ]
    ),
    new Recipe(
      'Burger',
      'A very tasty burger',
      'https://natashaskitchen.com/wp-content/uploads/2023/06/Cheeseburger-3.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Lettuce', 3),
        new Ingredient('Cheese', 1),
      ]
    ),
    new Recipe(
      'Caprese Salad',
      'A refreshing salad with tomatoes, mozzarella, and fresh basil.',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-2-2.jpg',
      [
        new Ingredient('Tomatoes', 4),
        new Ingredient('Fresh Mozzarella', 200),
        new Ingredient('Fresh Basil Leaves', 10),
        new Ingredient('Balsamic Vinegar', 30),
        new Ingredient('Olive Oil', 30),
      ]
    ),
    new Recipe(
      'Chicken Stir-Fry',
      'A quick and flavorful stir-fry with tender chicken and colorful vegetables.',
      'https://www.saltandlavender.com/wp-content/uploads/2022/03/chicken-stir-fry-1-720x1080.jpg',
      [
        new Ingredient('Chicken Breast', 400),
        new Ingredient('Broccoli Florets', 150),
        new Ingredient('Bell Peppers', 2),
        new Ingredient('Soy Sauce', 50),
        new Ingredient('Sesame Oil', 20),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(i: Ingredient[]) {
    this.slService.addIngredients(i)
  }
}
