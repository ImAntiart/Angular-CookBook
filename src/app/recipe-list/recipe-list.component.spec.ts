import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeService } from '../recipe.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Recipe } from '../recipe.model';

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;
  let recipeService: RecipeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeListComponent],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
      ],
      providers: [RecipeService],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    recipeService = TestBed.inject(RecipeService);
    fixture.detectChanges();
  });

  it('should delete a recipe and update the list', fakeAsync(() => {
    const testRecipe: Recipe = {
      id: 1,
      name: 'Test Recipe',
      ingredients: [{ name: 'Ingredient 1', quantity: 100, unit: 'г' }],
      description: 'This is a test recipe.',
      image: '/assets/images/test.jpg',
      createdAt: new Date(),
    };

    // Создаем рецепт через сервис
    service.createRecipe(testRecipe).subscribe(() => {
      // Получаем список рецептов
      service.getRecipes().subscribe(recipes => {
        component.recipes = recipes; // Обновляем локальный массив recipes
        expect(component.recipes.find(r => r.id === 1)).toBeDefined(); // Рецепт должен существовать

        // Удаляем рецепт
        component.deleteRecipe(1);
        expect(component.recipes.find(r => r.id === 1)).toBeUndefined(); // Рецепт должен быть удален
      });
    });

    tick(); // Ждем завершения асинхронных операций
  }));
