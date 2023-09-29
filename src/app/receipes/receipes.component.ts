import { Component, OnInit } from '@angular/core';
import { Receipe } from './recipe.model';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
})
export class ReceipesComponent implements OnInit {
  selectedReceipe: Receipe | undefined = undefined;
  constructor() {}

  ngOnInit(): void {}

  showSelectedReceipe(receipe: Receipe) {
    this.selectedReceipe = receipe;
  }
}
