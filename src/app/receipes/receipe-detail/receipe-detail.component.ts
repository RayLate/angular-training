import { Receipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css'],
})
export class ReceipeDetailComponent implements OnInit {
  @Input() receipe!: Receipe;
  constructor() {}

  ngOnInit(): void {}
}
