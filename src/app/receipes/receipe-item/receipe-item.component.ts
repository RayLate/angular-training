import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Receipe } from '../recipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css'],
})
export class ReceipeItemComponent implements OnInit {
  @Input() receipe!: Receipe;

  constructor() {}

  ngOnInit(): void {}


}
