import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  loading = true;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data;
      this.loading = false;
    });
  }

  deleteRecipe(id: number | undefined): void {
    if (id === undefined) return; // Выходим, если ID не определен

    if (confirm('Вы уверены, что хотите удалить этот рецепт?')) {
      this.recipeService.deleteRecipe(id).subscribe(() => {
        this.recipes = this.recipes.filter(recipe => recipe.id !== id);
      });
    }
  }
}
