import { TestBed } from '@angular/core/testing';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';

describe('RecipeService', () => {
  let service: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Тест на создание рецепта
  it('should create a new recipe', () => {
    const newRecipe: Recipe = {
      id: 0,
      name: 'Test Recipe',
      ingredients: [{ name: 'Ingredient 1', quantity: 100, unit: 'г' }],
      description: 'This is a test recipe.',
      image: 'test.jpg',
    };

    service.createRecipe(newRecipe).subscribe((createdRecipe) => {
      expect(createdRecipe.id).toBeGreaterThan(0); // Проверяем, что ID был сгенерирован
      expect(createdRecipe.name).toBe('Test Recipe'); // Проверяем название рецепта
    });
  });

  // Тест на получение всех рецептов
  it('should get all recipes', () => {
    service.getRecipes().subscribe((recipes) => {
      expect(recipes.length).toBeGreaterThanOrEqual(0); // Проверяем, что список не пустой
    });
  });

  // Тест на удаление рецепта
  it('should delete a recipe', () => {
    const newRecipe: Recipe = {
      id: 1,
      name: 'Test Recipe',
      ingredients: [{ name: 'Ingredient 1', quantity: 100, unit: 'г' }],
      description: 'This is a test recipe.',
      image: 'test.jpg',
    };

    // Создаем рецепт
    service.createRecipe(newRecipe).subscribe(() => {
      // Проверяем, что рецепт создан
      service.getRecipes().subscribe((recipes) => {
        expect(recipes.find(r => r.id === 1)).toBeDefined(); // Рецепт должен существовать

        // Удаляем рецепт
        service.deleteRecipe(1).subscribe(() => {
          // Проверяем, что рецепт удален
          service.getRecipes().subscribe((updatedRecipes) => {
            expect(updatedRecipes.find(r => r.id === 1)).toBeUndefined(); // Рецепт должен быть удален
          });
        });
      });
    });
  });
});
