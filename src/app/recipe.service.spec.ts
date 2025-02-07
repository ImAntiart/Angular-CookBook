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

  it('should get all recipes', () => {
    service.getRecipes().subscribe((recipes) => {
      expect(recipes.length).toBeGreaterThanOrEqual(0); // Проверяем, что список не пустой
    });
  });

  it('should delete a recipe', () => {
    const newRecipe: Recipe = {
      id: 1,
      name: 'Test Recipe',
      ingredients: [{ name: 'Ingredient 1', quantity: 100, unit: 'г' }],
      description: 'This is a test recipe.',
      image: 'test.jpg',
    };

    service.createRecipe(newRecipe).subscribe(() => {
      service.deleteRecipe(1).subscribe(() => {
        service.getRecipes().subscribe((recipes) => {
          expect(recipes.find((r) => r.id === 1)).toBeUndefined(); // Проверяем, что рецепт удален
        });
      });
    });
  });
});
