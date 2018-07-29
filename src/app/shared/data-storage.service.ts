import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from "rxjs/operators";

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private rcpService: RecipeService) {}

  storeRecipes() {
    return this.http.put(
      "https://angular-recipe-book-b9b28.firebaseio.com/recipes.json",
      this.rcpService.getRecipes()
    );
  }

  getRecipes() {
    this.http
      .get("https://angular-recipe-book-b9b28.firebaseio.com/recipes.json")
      .pipe(
        map((response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe["ingredients"]) {
              recipe["ingredients"] = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.rcpService.setRecipes(recipes);
      });
  }
}
