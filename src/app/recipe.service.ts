import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';
@Injectable({
providedIn: 'root',
})
export class RecipeService {
private recipes: Recipe[] = [
{
id: 1,
name: 'БИФШТЕКС ИЗ ХОРКЕРА',
ingredients: [
{ name: 'мясо хоркера', quantity: 1, unit: 'шт.' },
{ name: 'соль', quantity: 1, unit: 'щепотка' }
],
description: 'Разделите мясо хоркера на куски толщиной 2-3 см, отбейте молотком и посыпьте солью. Жарьте на сковороде до хрустящей корочки.',
image: 'src/assets/images/horker-steak.jpg',
createdAt: new Date('2023-01-15')
}
]
// Методы CRUD остаются без изменений
getRecipes(): Observable<Recipe[]> {
return of(
this.recipes.map(recipe => ({ ...recipe, isEditing: false })) // Инициализируем isEditing как false
);
}
getRecipe(id: number): Observable<Recipe | undefined> {
return of(this.recipes.find(r => r.id === id));
}
createRecipe(recipe: Recipe): Observable<Recipe> {
recipe.id = this.generateId();
recipe.createdAt = new Date(); // Добавляем текущую дату
this.recipes.push(recipe);
return of(recipe);
}
updateRecipe(recipe: Recipe): Observable<Recipe> {
const index = this.recipes.findIndex(r => r.id === recipe.id);
if (index !== -1) this.recipes[index] = { ...recipe }; // Создаем копию объекта
return of(recipe);
}
deleteRecipe(id: number): Observable<void> {
this.recipes = this.recipes.filter(recipe => recipe.id !== id); // Удаляем рецепт из массива
return of(); // Возвращаем пустой Observable
}
private generateId(): number {
// Извлекаем все ID и фильтруем undefined
const ids = this.recipes
.map(r => r.id) // Получаем массив ID
.filter(id => typeof id === 'number') // Оставляем только числовые значения
.map(Number); // Преобразуем в массив чисел
// Если массив не пустой, берем максимальное значение + 1, иначе возвращаем 1
return ids.length > 0 ? Math.max(...ids) + 1 : 1;
}
}
