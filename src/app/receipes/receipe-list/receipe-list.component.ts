import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receipe } from '../recipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css'],
})
export class ReceipeListComponent implements OnInit {
  receipes: Receipe[] = [
    new Receipe(
      'Receipe 1',
      'Receipe 1 Description',
      'https://images.squarespace-cdn.com/content/v1/598785e8f9a61e3bd68fb96f/1675118379526-FEEAL3NLEX1Z5CHAASOP/chicken-with-currants-olives-and-herbs.png?format=1000w'
    ),
    new Receipe(
      'Receipe 2',
      'Receipe 2 Description',
      'https://images.squarespace-cdn.com/content/v1/598785e8f9a61e3bd68fb96f/1675118379526-FEEAL3NLEX1Z5CHAASOP/chicken-with-currants-olives-and-herbs.png?format=1000w'
    ),
  ];
  @Output() selectReceipeEvent = new EventEmitter<Receipe>();

  constructor() {}

  ngOnInit(): void {}
  onReceipeSelect(receipe: Receipe) {
    this.selectReceipeEvent.emit(receipe);
  }
}
