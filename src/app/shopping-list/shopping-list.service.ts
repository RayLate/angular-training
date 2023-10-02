import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

export class ShoppingListService {
  IngredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 2),
    new Ingredient('Pearl', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(i: Ingredient) {
    this.ingredients.push(i);
    this.IngredientChanged.emit(this.getIngredients());
  }

  addIngredients(i: Ingredient[]) {
    this.ingredients.push(...i);
    this.IngredientChanged.emit(this.getIngredients());
  }
}
