import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = this.loadRecipesFromLocalStorage(); // Загружаем рецепты из localStorage

  // Загрузка рецептов из localStorage
  private loadRecipesFromLocalStorage(): Recipe[] {
    const storedRecipes = localStorage.getItem('recipes');
    return storedRecipes ? JSON.parse(storedRecipes) : [];
  }

  // Сохранение рецептов в localStorage

  // Получение списка рецептов
  getRecipes(): Observable<Recipe[]> {
    return of(this.recipes.map(recipe => ({ ...recipe, isEditing: false })));
  }

  // Получение рецепта по ID
  getRecipe(id: number): Observable<Recipe | undefined> {
    return of(this.recipes.find(r => r.id === id));
  }

  // Создание нового рецепта
  createRecipe(recipe: Recipe): Observable<Recipe> {
    recipe.id = this.generateId();
    recipe.createdAt = new Date();
    this.recipes.push({ ...recipe });
    this.saveRecipesToLocalStorage(); // Сохраняем изменения
    return of(recipe);
  }

  // Обновление рецепта
  updateRecipe(recipe: Recipe): Observable<Recipe> {
    const index = this.recipes.findIndex(r => r.id === recipe.id);
    if (index !== -1) this.recipes[index] = { ...recipe };
    this.saveRecipesToLocalStorage(); // Сохраняем изменения
    return of(recipe);
  }

  // Удаление рецепта
  deleteRecipe(id: number): Observable<void> {
    console.log('Deleting recipe with ID:', id);
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    this.saveRecipesToLocalStorage(); // Сохраняем изменения
    return of(void 0); // Явно возвращаем Observable<void>
  }

  private saveRecipesToLocalStorage(): void {
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
  }
  // Генерация уникального ID
  private generateId(): number {
    const ids = this.recipes
      .map(r => r.id)
      .filter(id => typeof id === 'number')
      .map(Number);

    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
  }
}
