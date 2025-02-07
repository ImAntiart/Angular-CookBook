import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  recipe: Recipe = {
    name: '',
    description: '',
    ingredients: [{ name: '', quantity: 0, unit: '' }]
  };

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  // Сохранение нового рецепта
  saveRecipe(): void {
    if (!this.recipe.name.trim()) return; // Проверяем, что название не пустое

    this.recipeService.createRecipe({ ...this.recipe }).subscribe(() => {
      alert('Рецепт успешно создан!');
      this.resetForm(); // Сбрасываем форму после создания
    });
  }

  // Отмена создания рецепта
  cancel(): void {
    this.resetForm();
  }

  // Сброс формы
  resetForm(): void {
    this.recipe = {
      name: '',
      description: '',
      ingredients: [{ name: '', quantity: 0, unit: '' }]
    };
  }

  // Добавление нового ингредиента
  addIngredient(): void {
    this.recipe.ingredients.push({ name: '', quantity: 0, unit: '' });
  }

  // Удаление ингредиента
  removeIngredient(index: number): void {
    this.recipe.ingredients.splice(index, 1);
  }
}
