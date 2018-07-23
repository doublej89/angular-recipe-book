import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "Name1",
      "blahblahblahblah",
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Picture_font_awesome.svg"
    ),
    new Recipe(
      "Name2",
      "blahblahblahblah",
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Picture_font_awesome.svg"
    ),
    new Recipe(
      "Name3",
      "blahblahblahblah",
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Picture_font_awesome.svg"
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
