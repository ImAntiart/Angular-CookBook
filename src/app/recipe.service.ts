import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = this.loadRecipesFromLocalStorage();


  private loadRecipesFromLocalStorage(): Recipe[] {
    const storedRecipes = localStorage.getItem('recipes');
    return storedRecipes ? JSON.parse(storedRecipes) : [];
  }


  getRecipes(): Observable<Recipe[]> {
    return of(this.recipes.map(recipe => ({ ...recipe, isEditing: false })));
  }

  getRecipe(id: number): Observable<Recipe | undefined> {
    return of(this.recipes.find(r => r.id === id));
  }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    recipe.id = this.generateId();
    recipe.createdAt = new Date();
    this.recipes.push({ ...recipe });
    this.saveRecipesToLocalStorage();
    return of(recipe);
  }


  updateRecipe(recipe: Recipe): Observable<Recipe> {
    const index = this.recipes.findIndex(r => r.id === recipe.id);
    if (index !== -1) this.recipes[index] = { ...recipe };
    this.saveRecipesToLocalStorage();
    return of(recipe);
  }


  deleteRecipe(id: number): Observable<void> {
    console.log('Deleting recipe with ID:', id);
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    this.saveRecipesToLocalStorage();
    return of(void 0);
  }

  private saveRecipesToLocalStorage(): void {
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
  }

  private generateId(): number {
    const ids = this.recipes
      .map(r => r.id)
      .filter(id => typeof id === 'number')
      .map(Number);

    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
  }
}
