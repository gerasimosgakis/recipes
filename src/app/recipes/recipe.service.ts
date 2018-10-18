import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    constructor(private slService: ShoppingListService) {

    }
    
    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Burger',
            'The tastiest burger you will ever taste',
            'https://sifu.unileversolutions.com/image/en-AU/recipe-topvisual/2/1260-709/beef-burger-with-deep-fried-bacon-and-thousand-island-dressing-50247463.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Buns', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Best Pizza',
            'The amazing original Italian pizza',
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
            [
                new Ingredient('pizza base', 1),
                new Ingredient('cheese', 10),
                new Ingredient('vegetables', 20),
                new Ingredient('tomato sauce', 1),
            ]),
    ];

    public getRecipes() {
        return this.recipes.slice();
    }

    public getRecipe(index: number) {
        return this.recipes[index];
    }

    public addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}