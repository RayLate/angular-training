import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  ingredientName: string = '';
  ingredientNumber: number = 0;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddIngredient() {
    this.shoppingListService.addIngredient(
      new Ingredient(this.ingredientName, this.ingredientNumber)
    );
  }
}
