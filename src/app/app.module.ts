import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Маршрутизация
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { ReactiveFormsModule } from '@angular/forms'; // Для реактивных форм
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Для Angular Material
import { MatButtonModule } from '@angular/material/button'; // Кнопки Material
import { MatCardModule } from '@angular/material/card'; // Карточки Material
import { MatFormFieldModule } from '@angular/material/form-field'; // Поля формы Material
import { MatInputModule } from '@angular/material/input'; // Ввод текста Material
import { MatTableModule } from '@angular/material/table'; // Таблицы Material

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeFormComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule, // Основной модуль для браузера
    AppRoutingModule, // Маршрутизация
    ReactiveFormsModule, // Реактивные формы
    BrowserAnimationsModule, // Анимации для Material
    MatButtonModule, // Кнопки Material
    MatCardModule, // Карточки Material
    MatFormFieldModule, // Поля формы Material
    MatInputModule, // Ввод текста Material
    MatTableModule // Таблицы Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
