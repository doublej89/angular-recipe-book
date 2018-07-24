import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Name1",
      "blahblahblahblah",
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Picture_font_awesome.svg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Name2",
      "blahblahblahblah",
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Picture_font_awesome.svg",
      [new Ingredient("Banana", 4), new Ingredient("Meat", 4)]
    ),
    new Recipe(
      "Name3",
      "blahblahblahblah",
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Picture_font_awesome.svg",
      [new Ingredient("Wheat", 6), new Ingredient("Lettuce", 16)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
