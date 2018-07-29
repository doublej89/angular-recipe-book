import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
