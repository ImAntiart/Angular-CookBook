import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { firstValueFrom } from 'rxjs';

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
    if (id === undefined) return;

    if (confirm('Вы уверены, что хотите удалить этот рецепт?')) {
      firstValueFrom(this.recipeService.deleteRecipe(id)).then(() => {
        console.log('Рецепт успешно удален');
        window.location.reload(); // Перезагружаем страницу
      }).catch((error) => {
        console.error('Ошибка при удалении рецепта:', error);
      });
    }
  }


// Переключение между режимами "просмотр" и "редактирование"
toggleEdit(recipe: Recipe): void {
this.recipes.forEach(r => (r.isEditing = false)); // Закрываем все открытые формы
recipe.isEditing = true;
}
// Отмена редактирования
cancelEdit(recipe: Recipe): void {
recipe.isEditing = false;
}
// Сохранение изменений
saveRecipe(recipe: Recipe): void {
if (!recipe.id) return;
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

}
