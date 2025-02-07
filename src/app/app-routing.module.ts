import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // Главная страница перенаправляется на /recipes
  { path: 'recipes', component: RecipeListComponent }, // Маршрут для списка рецептов
  { path: 'recipes/new', component: RecipeFormComponent }, // Маршрут для создания рецепта
  { path: 'recipes/:id/edit', component: RecipeFormComponent }, // Маршрут для редактирования рецепта
  { path: 'recipes/:id', component: RecipeDetailComponent } // Маршрут для просмотра деталей рецепта
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
