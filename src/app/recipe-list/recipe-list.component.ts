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

  // Переключение между режимами "просмотр" и "редактирование"
  toggleEdit(recipe: Recipe): void {
    recipe.isEditing = !recipe.isEditing;
  }

  // Отмена редактирования
  cancelEdit(recipe: Recipe): void {
    recipe.isEditing = false;
  }

  // Сохранение изменений
  saveRecipe(recipe: Recipe): void {
    this.recipeService.updateRecipe(recipe).subscribe(() => {
      recipe.isEditing = false; // Выход из режима редактирования после сохранения
    });
  }

  // Удаление ингредиента
  removeIngredient(recipe: Recipe, index: number): void {
    recipe.ingredients.splice(index, 1);
  }

  // Добавление нового ингредиента
  addIngredient(recipe: Recipe): void {
    recipe.ingredients.push({ name: '', quantity: 0, unit: '' });
  }

  // Удаление рецепта
  deleteRecipe(id: number): void {
    if (confirm('Вы уверены, что хотите удалить этот рецепт?')) {
      this.recipeService.deleteRecipe(id).subscribe(() => {
        this.recipes = this.recipes.filter(recipe => recipe.id !== id);
      });
    }
  }
}
