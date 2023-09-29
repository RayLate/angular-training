import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<{
    ingredientName: string;
    ingredientNumber: number;
  }>();
  ingredientName: string = '';
  ingredientNumber: number = 0;
  constructor() {}

  ngOnInit(): void {}

  onAddIngredient() {
  
    this.ingredientAdded.emit({
      ingredientName: this.ingredientName,
      ingredientNumber: this.ingredientNumber,
    });
  }
}
