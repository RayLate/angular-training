import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 2),
    new Ingredient('Pearl', 5),
  ];
  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded(eventData: {
    ingredientName: string;
    ingredientNumber: number;
  }) {
    // This function will be called when the event is emitted
    console.log('Received event data:', eventData);
    this.ingredients.push(
      new Ingredient(eventData.ingredientName, eventData.ingredientNumber)
    );
    // You can do further processing with the received data here
  }
}
